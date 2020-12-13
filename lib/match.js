'use strict'

const movingAvg = require('live-moving-average')
const debug = require('debug')('berlin-gtfs-rt-server:match')
const pLimit = require('p-limit')
const {
	createMatchTrip,
	createMatchMovement,
} = require('match-gtfs-rt-to-gtfs')
const gtfsRtInfo = require('./gtfs-rt-info')
const gtfsInfo = require('./gtfs-info')

const matchTripWithGtfs = createMatchTrip(gtfsRtInfo, gtfsInfo)
const matchMovementWithGtfs = createMatchMovement(gtfsRtInfo, gtfsInfo)

let items = 0
let matchedItems = 0
let cancelledMatches = 0
const avgWaitTime = movingAvg(100, 0)
const avgMatchTime = movingAvg(100, 0)
const seenTripIds = new Set()
const matchedTripIds = new Set()

const limit = pLimit(8) // 8 concurrent calls

// todo: DRY with matchMovement
const matchTrip = async (trip) => {
	items++
	const origTripId = trip.id
	seenTripIds.add(origTripId)

	// Promises returned by p-limit are not cancelable yet, but we can
	// hack around this here.
	// see also sindresorhus/p-limit#25
	let cancelled = false
	setTimeout(() => {
		cancelled = true
		cancelledMatches++
	}, 10_000)

	const t0 = Date.now()
	await limit(async () => {
		if (cancelled) return;

		const t1 = Date.now()
		trip = await matchTripWithGtfs(trip)
		const t2 = Date.now()

		debug('matched trip in', t2 - t1, 'after', t1 - t0, 'waiting')
		avgMatchTime.push(t2 - t1)
		avgWaitTime.push(t1 - t0)
		const isMatched = trip.ids && trip.ids['vbb-gtfs']
		if (isMatched) {
			matchedItems++
			matchedTripIds.add(origTripId)
		}
	})

	return trip
}

// todo: DRY with matchTrip
const matchMovement = async (mv) => {
	items++
	const origTripId = mv.tripId
	seenTripIds.add(origTripId)

	// Promises returned by p-limit are not cancelable yet, but we can
	// hack around this here.
	// see also sindresorhus/p-limit#25
	let cancelled = false
	setTimeout(() => {
		cancelled = true
		cancelledMatches++
	}, 10_000)

	const t0 = Date.now()
	await limit(async () => {
		if (cancelled) return;

		const t1 = Date.now()
		mv = await matchMovementWithGtfs(mv)
		const t2 = Date.now()

		debug('matched movement in', t2 - t1, 'after', t1 - t0, 'waiting')
		avgMatchTime.push(t2 - t1)
		avgWaitTime.push(t1 - t0)
		const isMatched = mv.tripIds && mv.tripIds['vbb-gtfs']
		if (isMatched) {
			matchedItems++
			matchedTripIds.add(origTripId)
		}
	})

	return mv
}

const stats = () => {
	return {
		items,
		matchedItems,
		cancelledMatches,
		avgMatchTime: avgMatchTime.get(),
		avgWaitTime: avgWaitTime.get(),
		seenTripIds: seenTripIds.size,
		matchedTripIds: matchedTripIds.size,
	}
}

module.exports = {
	matchTrip,
	matchMovement,
	stats,
}
