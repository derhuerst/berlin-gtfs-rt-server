import {
	normalizeStopName,
	normalizeLineName,
	normalizeTripHeadsign,
} from './normalize.js'

const hafasInfo = {
	endpointName: 'vbb-hafas', // todo?
	normalizeStopName,
	normalizeLineName,
	normalizeTripHeadsign,
}

export default hafasInfo
