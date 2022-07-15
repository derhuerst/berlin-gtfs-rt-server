#!/bin/bash

set -e
set -o pipefail
set -x

>&2 echo "Checking if GTFS was already imported..."
if [[ $(psql -t -c 'SELECT 1 FROM agency LIMIT 1') ]]
then
    >&2 echo "GTFS data already imported, skipping build.sh"
    exit 0
fi

wget --compression auto \
	-r --no-parent --no-directories -R .csv.gz \
	-P gtfs -N 'https://vbb-gtfs.jannisr.de/latest/'

env | grep '^PG'

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
