#!/bin/bash

set -e
set -o pipefail
set -x

# todo: /latest/ doesn't redirect, because it is a symlink on the webserver
# see also http://www.openfusion.net/tags/nginx/
gtfs_url='https://vbb-gtfs.jannisr.de/latest/'
gtfs_permalink="$(curl -fsSL -o /dev/null -w '%{url_effective}' "$gtfs_url")"

wget --compression auto \
	-r --no-parent --no-directories -R .csv.gz \
	-P gtfs -N "$gtfs_permalink"

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
