'use strict'

const ProxyAgent = require('https-proxy-agent')
const {isIP} = require('net')
const {Agent} = require('https')
const roundRobin = require('@derhuerst/round-robin-scheduler')
const vbbProfile = require('hafas-client/p/vbb')
const withThrottling = require('hafas-client/throttle')
const createHafas = require('hafas-client')

let transformReq = (_, req) => req
const proxies = process.env.HTTPS_PROXY || process.env.HTTP_PROXY
if (proxies) {
	const agents = proxies.split(',').map(p => new ProxyAgent(p))
	const agentPool = roundRobin(agents)
	transformReq = (_, req) => ({
		...req,
		agent: agentPool.get(),
	})
	// todo: kick unavailable proxies?
} else if (process.env.LOCAL_ADDRESS) {
	const agents = process.env.LOCAL_ADDRESS
	.split(',')
	.map((localAddress) => {
		const family = isIP(localAddress)
		if (family === 0) throw new Error('invalid local address:' + localAddress)
		return new Agent({localAddress, family})
	})
	const agentPool = roundRobin(agents)
	transformReq = (_, req) => ({
		...req,
		agent: agentPool.get(),
	})
}

const hafas = createHafas({
	...withThrottling(vbbProfile, 25, 1000), // 25 req/s
	transformReq,
}, 'hafas-gtfs-rt-server-example')

module.exports = hafas
