'use strict'

const createGtfsRtWriter = require('hafas-gtfs-rt-feed/writer')
const differentialToFullDataset = require('gtfs-rt-differential-to-full-dataset')
const computeEtag = require('etag')
const serveBuffer = require('serve-buffer')
const {pipeline} = require('stream')
const {parse} = require('ndjson')
const {createServer} = require('http')
const {POSITION, TRIP} = require('./lib/protocol')

const onError = (err) => {
	if (!err) return;
	console.error(err)
	process.exit(1)
}

const {
	out: gtfsRt,
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

const onRequest = (req, res) => {
	const path = new URL(req.url, 'http://localhost').pathname
	if (path === '/') {
		serveBuffer(req, res, feed, {timeModified, etag})
	} else {
		res.statusCode = 404
		res.end('nope')
	}
}

const parser = parse()
pipeline(
	process.stdin,
	parser,
	onError,
)

// todo: accept positions from stdin
parser.on('data', (item) => {
	if (item[0] === POSITION) {
		writePosition(item[1], item[2])
	} else if (item[0] === TRIP) {
		writeTrip(item[1])
	} else {
		console.error('invalid/unknown item', item)
	}
})

pipeline(
	gtfsRt,
	differentialToFull,
	onError,
)

createServer(onRequest)
.listen(3000, (err) => {
	if (!err) return;
	console.error(err)
	process.exit(1)
})
