'use strict'

const _vbbProfile = require('hafas-client/p/vbb')
const defaultProfile = require('hafas-client/lib/default-profile')
const withThrottling = require('hafas-client/throttle')
const createHafas = require('hafas-client')
const Redis = require('ioredis')
const withCaching = require('cached-hafas-client')
const createRedisStore = require('cached-hafas-client/stores/redis')

const userAgents = [
	['App/4.4.6 (iPhone', 'App/4.5.1 (iPhone'],
	['iOS 14.8.1', 'iOS 15.2', 'iOS 5.4.1'],
	['Scale/2.00)', 'Scale/3.00)'],
]
// compute all permutations:
// App/4.4.6 (iPhone; iOS 14.8.1; Scale/2.00)
// App/4.5.1 (iPhone; iOS 14.8.1; Scale/2.00)
// App/4.4.6 (iPhone; iOS 15.2; Scale/2.00)
// …
.reduce((permutations, axis, i) => {
	if (i === 0) return axis.map(newVal => [newVal])
	return axis.flatMap(newVal => permutations.map(vals => [...vals, newVal]))
}, [])
.map(vals => vals.join('; '))

const transformReq = (_, req) => {
	req.headers['user-agent'] = userAgents[Math.round(Math.random() * (userAgents.length - 1))]
	return req
}

const vbbProfile = {
	..._vbbProfile,
	// Force hafas-client *not to* normalize stop names, we do it ourselves.
	parseStationName: (ctx, name) => name,
	parseLocation: defaultProfile.parseLocation,
	transformReq,
}
const rawHafas = createHafas(
	withThrottling(vbbProfile, 50, 1000), // 50 req/s
	userAgents[0], // overwritten by transfromReq anyways
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
