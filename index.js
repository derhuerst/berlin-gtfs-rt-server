'use strict'

const createGtfsRtWriter = require('hafas-gtfs-rt-feed/writer')
const createMonitor = require('hafas-monitor-trips')
const differentialToFullDataset = require('gtfs-rt-differential-to-full-dataset')
const {createServer} = require('http')
const computeEtag = require('etag')
const serveBuffer = require('serve-buffer')
const hafas = require('./lib/hafas')
const {matchTrip, stats: matchStats} = require('./lib/match')

const BBOX = JSON.parse(process.argv.slice[3] || process.env.BBOX || 'null')

const onError = (err) => {
	console.error(err)
	process.exit(1)
}

const monitor = createMonitor(hafas, BBOX, {
	fetchTripsInterval: 60 * 1000, // 60s
})
monitor.on('error', (err) => {
	if (err.code === 'ECONNRESET') console.error(err)
	else onError(err)
})
monitor.on('hafas-error', console.error)

const {
	out: writer,
	writeTrip, writePosition,
} = createGtfsRtWriter({
	encodePbf: false, // todo
})

const differentialToFull = differentialToFullDataset({
	ttl: 5 * 60 * 1000, // 5m
})

let feed = Buffer.alloc(0)
let timeModified = new Date()
let etag = computeEtag(feed)
differentialToFull.on('change', () => {
	feed = differentialToFull.asFeedMessage()
	timeModified = new Date()
	etag = computeEtag(feed)
})

let stats = null
monitor.on('stats', (newStats) => {
	stats = newStats
	stats = {
		...newStats,
		matchTrip: matchStats(),
	}
})

const server = createServer((req, res) => {
	const path = new URL(req.url, 'http://localhost').pathname
	if (path === '/') {
		serveBuffer(req, res, feed, {timeModified, etag})
	} else if (path === '/stats') {
		res.setHeader('content-type', 'application/json')
		res.end(JSON.stringify(stats))
	} else {
		res.statusCode = 404
		res.end('nope')
	}
})

monitor.on('position', (loc, movement) => writePosition(loc, movement))
monitor.on('trip', (trip) => {
	matchTrip(trip)
	.then((trip) => {
		writeTrip(trip)
	})
	.catch((err) => {
		console.error(err)
		writeTrip(trip)
	})
	.catch(onError)
})

writer.pipe(differentialToFull)

server.listen(3000, (err) => {
	if (!err) return;
	console.error(err)
	process.exit(1)
})
