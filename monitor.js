'use strict'

const createMonitor = require('hafas-monitor-trips')
const hafas = require('./lib/hafas')
const createLogger = require('./lib/logger')
const {POSITION, TRIP} = require('./lib/protocol')

const BBOX = JSON.parse(process.argv.slice[3] || process.env.BBOX || 'null')

const logger = createLogger('monitor')

const monitor = createMonitor(hafas, BBOX, {
	fetchTripsInterval: 60 * 1000, // 60s
})
monitor.on('error', (err) => {
	logger.error(err)
	if (!['ECONNRESET', 'ETIMEDOUT', 'EAI_AGAIN'].includes(err.code)) process.exit(1)
})
monitor.on('hafas-error', logger.warn.bind(logger))

const writeNdjson = (item) => {
	process.stdout.write(JSON.stringify(item) + '\n')
}
monitor.on('position', (loc, movement) => {
	writeNdjson([POSITION, loc, movement])
})
monitor.on('trip', (trip) => {
	writeNdjson([TRIP, trip])
})

monitor.on('stats', logger.info.bind(logger))
