'use strict'

const {
	normalizeStopName,
	normalizeLineName,
} = require('./normalize')

const hafasInfo = {
	endpointName: 'vbb-hafas', // todo?
	normalizeStopName,
	normalizeLineName,
}

module.exports = hafasInfo
