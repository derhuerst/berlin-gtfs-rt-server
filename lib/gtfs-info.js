'use strict'

const {
	normalizeStopName,
	normalizeLineName,
} = require('./normalize')

const gtfsInfo = {
	endpointName: 'vbb-gtfs', // todo?
	normalizeStopName,
	normalizeLineName,
}

module.exports = gtfsInfo
