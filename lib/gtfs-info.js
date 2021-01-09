'use strict'

const {
	normalizeStopName,
	normalizeLineName,
} = require('./normalize')

const gtfsInfo = {
	endpointName: 'gtfs', // todo?
	normalizeStopName,
	normalizeLineName,
}

module.exports = gtfsInfo
