#!/bin/bash

set -e
set -o pipefail
set -x

wget -r -R 'shapes.csv' --no-parent --no-directories -P gtfs -N 'https://vbb-gtfs.jannisr.de/latest/'

NODE_ENV=production node_modules/.bin/gtfs-to-sql \
	gtfs/agency.csv \
	gtfs/calendar.csv \
	gtfs/calendar_dates.csv \
	gtfs/frequencies.csv \
	gtfs/routes.csv \
	gtfs/stop_times.csv \
	gtfs/stops.csv \
	gtfs/transfers.csv \
	gtfs/trips.csv \
	-d | psql -b

NODE_ENV=production node_modules/.bin/build-gtfs-match-index \
	lib/gtfs-rt-info.js lib/gtfs-info.js \
	| psql -b
