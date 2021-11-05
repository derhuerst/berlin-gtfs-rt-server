'use strict'

const _normalizeStopName = require('normalize-vbb-station-name-for-search')
const slugg = require('slugg')
const QuickLRU = require('quick-lru')

const cache = new QuickLRU({maxSize: 300})
const normalizeStopName = (name) => {
	if (cache.has(name)) return cache.get(name)
	try {
		const normalizedName = _normalizeStopName(name)
		cache.set(name, normalizedName)
		return normalizedName
	} catch (err) {
		if (err.isParseError) {
			cache.set(name, name)
			return name
		}
		throw err
	}
}

// we match hafas-client here
// https://github.com/public-transport/hafas-client/blob/8ed218f4d62a0c220d453b1b1ffa7ce232f1bb83/parse/line.js#L13
// todo: check that this actually works
const normalizeLineName = (name) => {
	return slugg(name.replace(/([a-zA-Z]+)\s+(\d+)/g, '$1$2'))
}

module.exports = {
	normalizeStopName,
	normalizeLineName,
}
