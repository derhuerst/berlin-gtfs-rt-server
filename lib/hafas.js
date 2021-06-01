'use strict'

const vbbProfile = require('hafas-client/p/vbb')
const withThrottling = require('hafas-client/throttle')
const createHafas = require('hafas-client')
const Redis = require('ioredis')
const withCaching = require('cached-hafas-client')
const createRedisStore = require('cached-hafas-client/stores/redis')

const rawHafas = createHafas(
	withThrottling(vbbProfile, 25, 1000), // 25 req/s
	'hafas-gtfs-rt-server-example',
)

const redis = new Redis()
const hafas = withCaching(rawHafas, createRedisStore(redis))

// todo: expose a way to close the Redis client
module.exports = hafas
