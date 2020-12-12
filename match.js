'use strict'

const {pipeline} = require('stream')
const {parse, stringify} = require('ndjson')
const {transform: parallelTransform} = require('parallel-stream')
const createLogger = require('./lib/logger')
const {POSITION, TRIP} = require('./lib/protocol')
const {
	matchTrip,
	matchMovement,
	stats,
} = require('./lib/match')

const logger = createLogger('match')

// todo: DRY this
const transform = (item, _, cb) => {
	if (item[0] === POSITION) {
		const movement = item[2]

		matchMovement(movement)
		.then(movement => cb(null, [POSITION, item[1], movement]))
		// If matching failed, we still pass on the movement.
		.catch((err) => {
			logger.error(err)
			cb(null, [POSITION, item[1], movement])
		})
		.catch(cb)
	} else if (item[0] === POSITION) {
		const trip = item[1]

		matchTrip(trip)
		.then(trip => cb(null, [TRIP, trip]))
		// If matching failed, we still pass on the trip.
		.catch((err) => {
			logger.error(err)
			cb(null, [TRIP, trip])
		})
		.catch(cb)
	} else {
		cb(null, item)
	}
}

pipeline(
	process.stdin,
	parse(),
	parallelTransform(transform, {objectMode: true, concurrency: 16}),
	stringify(),
	process.stdout,
	(err) => {
		if (err) {
			logger.error(err)
			process.exit(1)
		}
		clearInterval(statsInterval)
	},
)

const statsInterval = setInterval(() => {
	logger.info(stats())
}, 5000)
