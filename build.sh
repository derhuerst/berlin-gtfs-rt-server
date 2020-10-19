#!/bin/sh

set -e
set -o pipefail
set -x

wget -r --no-parent --no-directories -P -N --no-clobber gtfs 'https://vbb-gtfs.jannisr.de/latest/'

NODE_ENV=production gtfs-to-sql -d \
	gtfs/agency.csv \
	gtfs/calendar.csv \
	gtfs/calendar_dates.csv \
	gtfs/frequencies.csv \
	gtfs/routes.csv \
	gtfs/stop_times.csv \
	gtfs/stops.csv \
	gtfs/transfers.csv \
	gtfs/trips.csv \
	| psql -b

NODE_ENV=production build-gtfs-match-index | psql -b
