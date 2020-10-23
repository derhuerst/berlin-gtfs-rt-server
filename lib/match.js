'use strict'

const movingAvg = require('live-moving-average')
const debug = require('debug')('berlin-gtfs-rt-server:match')
const pLimit = require('p-limit')
const {
	matchTrip: matchTripWithGtfs,
} = require('match-gtfs-rt-to-gtfs')

let tripObjects = 0
let matchedTripObjects = 0
let cancelledMatches = 0
const avgWaitTime = movingAvg(100, 0)
const avgMatchTime = movingAvg(100, 0)
const seenTripIds = new Set()
const matchedTripIds = new Set()

const limit = pLimit(8) // 8 concurrent calls
const matchTrip = async (trip) => {
	tripObjects++
	const origTripId = trip.id
	seenTripIds.add(origTripId)

	// Promises returned by p-limit are not cancelable yet, but we can
	// hack around this here.
	// see also sindresorhus/p-limit#25
	let cancelled = false
	setTimeout(() => {
		cancelled = true
	}, 10_000)

	const t0 = Date.now()
	let t1, t2
	await limit(async () => {
		if (cancelled) {
			cancelledMatches++
			return;
		}

		t1 = Date.now()
		trip = await matchTripWithGtfs(trip)
		t2 = Date.now()

		debug('matching took', Date.now() - t1)
		debug('waiting + matching took', Date.now() - t0)
		avgMatchTime.push(t2 - t1)
		avgWaitTime.push(t1 - t0)
		const isMatched = trip.ids && trip.ids['vbb-gtfs']
		if (isMatched) {
			matchedTripObjects++
			matchedTripIds.add(origTripId)
		}
	})

	return trip
}

const stats = () => {
	return {
		tripObjects,
		matchedTripObjects,
		cancelledMatches,
		avgMatchTime: avgMatchTime.get(),
		avgWaitTime: avgWaitTime.get(),
		seenTripIds: seenTripIds.size,
		matchedTripIds: matchedTripIds.size,
	}
}

module.exports = {
	matchTrip,
	stats,
}
