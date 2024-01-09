import {
	normalizeStopName,
	normalizeLineName,
	normalizeTripHeadsign,
} from './normalize.js'

const gtfsInfo = {
	endpointName: 'gtfs', // todo?
	normalizeStopName,
	normalizeLineName,
	normalizeTripHeadsign,
}

export default gtfsInfo
