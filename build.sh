#!/bin/bash

set -e
set -o pipefail
set -x

wget -r --no-parent --no-directories -P gtfs -N 'https://vbb-gtfs.jannisr.de/latest/'

env | grep '^PG'

NODE_ENV=production node_modules/.bin/gtfs-to-sql \
	gtfs/agency.csv \
	gtfs/calendar.csv \
	gtfs/calendar_dates.csv \
	gtfs/frequencies.csv \
	gtfs/routes.csv \
	gtfs/shapes.csv \
	gtfs/stop_times.csv \
	gtfs/stops.csv \
	gtfs/transfers.csv \
	gtfs/trips.csv \
	-d | psql -b

lib="$(dirname $(realpath $0))/lib"
NODE_ENV=production node_modules/.bin/build-gtfs-match-index \
	$lib/hafas-info.js $lib/gtfs-info.js \
	| psql -b
