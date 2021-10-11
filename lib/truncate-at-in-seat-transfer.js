'use strict'

const REMARK_CODE = 'text.journeystop.product.or.direction.changes.stop.message'
const isProductOrDirectionChangesRemark = r => r.code === REMARK_CODE

// For an trip with an in-seat transfer (a.k.a. through service) to another trip,
// the VBB HAFAS endpoint just adds all stopovers of the 2nd trip.
const truncateTripAtInSeatTransfer = (trip) => {
	const changeIdx = 1 + trip.stopovers.slice(1).findIndex((st) => (
		Array.isArray(st.remarks)
		&& st.remarks.some(isProductOrDirectionChangesRemark)
	))
	if (changeIdx < 1) return trip // not found, abort

	const changeSt = trip.stopovers[changeIdx]
	return {
		...trip,

		destination: changeSt.stop,
		arrival: changeSt.arrival,
		plannedArrival: changeSt.plannedArrival,
		arrivalDelay: changeSt.arrivalDelay,
		// todo: cancelled
		arrivalPlatform: changeSt.arrivalPlatform,
		plannedArrivalPlatform: changeSt.plannedArrivalPlatform,

		stopovers: trip.stopovers.slice(0, changeIdx + 1),
	}
}

module.exports = truncateTripAtInSeatTransfer
