'use strict'

const {
	normalizeStopName,
	normalizeLineName,
} = require('./normalize')

const gtfsRtInfo = {
	endpointName: 'vbb-hafas', // todo?
	normalizeStopName,
	normalizeLineName,
}

module.exports = gtfsRtInfo
