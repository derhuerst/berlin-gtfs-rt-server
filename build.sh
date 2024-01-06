#!/bin/bash

set -e
set -o pipefail
set -x

wget --compression auto \
	-r --no-parent --no-directories -R .csv.gz \
	-P gtfs -N 'https://vbb-gtfs.jannisr.de/latest/'

env | grep '^PG' || true

NODE_ENV=production node_modules/.bin/gtfs-to-sql -d --trips-without-shape-id --routes-without-agency-id -- \
	gtfs/agency.csv \
	gtfs/calendar.csv \
	gtfs/calendar_dates.csv \
	gtfs/frequencies.csv \
	gtfs/routes.csv \
	gtfs/stop_times.csv \
	gtfs/stops.csv \
	gtfs/transfers.csv \
	gtfs/trips.csv \
	| sponge | psql -b
	# gtfs/shapes.csv \

lib="$(dirname $(realpath $0))/lib"
NODE_ENV=production node_modules/.bin/build-gtfs-match-index \
	$lib/hafas-info.js $lib/gtfs-info.js \
	| sponge | psql -b
