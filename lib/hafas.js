'use strict'

const _vbbProfile = require('hafas-client/p/vbb')
const withThrottling = require('hafas-client/throttle')
const createHafas = require('hafas-client')
const Redis = require('ioredis')
const withCaching = require('cached-hafas-client')
const createRedisStore = require('cached-hafas-client/stores/redis')

const vbbProfile = {
	..._vbbProfile,
	// Force hafas-client *not to* normalize stop names, we do it ourselves.
	parseStationName: (ctx, name) => name,
}
const rawHafas = createHafas(
	withThrottling(vbbProfile, 50, 1000), // 50 req/s
	'berlin-gtfs-rt-server',
)

const redisOpts = {}
if (process.env.REDIS_URL) {
	const url = new URL(process.env.REDIS_URL)
	redisOpts.host = url.hostname || 'localhost'
	redisOpts.port = url.port || '6379'
	if (url.password) redisOpts.password = url.password
	if (url.pathname && url.pathname.length > 1) {
		redisOpts.db = parseInt(url.pathname.slice(1))
	}
}
const redis = new Redis(redisOpts)

const hafas = withCaching(rawHafas, createRedisStore(redis))

// todo: expose a way to close the Redis client
module.exports = hafas
