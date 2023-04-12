'use strict'

import {randomBytes} from 'crypto'
import {createIpPoolAgent} from 'localaddress-agent'
import _vbbProfile from 'hafas-client/p/vbb/index.js'
import defaultProfile from 'hafas-client/lib/default-profile.js'
import withThrottling from 'hafas-client/throttle.js'
import createHafas from 'hafas-client'
import Redis from 'ioredis'
import withCaching from 'cached-hafas-client'
import createRedisStore from 'cached-hafas-client/stores/redis.js'

const RANDOM_LOCAL_ADDRESSES_PREFIX = process.env.RANDOM_LOCAL_ADDRESSES_PREFIX
if (!RANDOM_LOCAL_ADDRESSES_PREFIX) {
	console.error('Missing/empty env var: $RANDOM_LOCAL_ADDRESSES_PREFIX')
	process.exit(1)
}

const ipRangeRandomly = (function* () {
	while (true) {
		yield [
			RANDOM_LOCAL_ADDRESSES_PREFIX,
			// Math.random().toString(16).slice(2, 6), ':',
			Math.random().toString(16).slice(2, 6), ':',
			Math.random().toString(16).slice(2, 6),
			'/64',
		].join('')
	}
})()
const ipRangeAgent = await createIpPoolAgent(ipRangeRandomly, 'eth0')

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
export default hafas
