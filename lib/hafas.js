'use strict'

const vbbProfile = require('hafas-client/p/vbb')
const withThrottling = require('hafas-client/throttle')
const createHafas = require('hafas-client')

const hafas = createHafas(
	withThrottling(vbbProfile, 25, 1000), // 25 req/s
	'hafas-gtfs-rt-server-example',
)

module.exports = hafas
