#!/bin/bash

set -e
set -o pipefail

lib="$(dirname $(realpath $0))/lib"

NODE_ENV=production node_modules/.bin/monitor-hafas \
	$lib/hafas.js \
	&

NODE_ENV=production node_modules/.bin/match-with-gtfs \
	$lib/hafas-info.js $lib/gtfs-info.js \
	&

NODE_ENV=production node_modules/.bin/serve-as-gtfs-rt \
	&

# kill child processes on exit
# https://stackoverflow.com/questions/360201/how-do-i-kill-background-processes-jobs-when-my-shell-script-exits/2173421#2173421
trap 'exit_code=$?; kill -- $(jobs -p); exit $exit_code' SIGINT SIGTERM EXIT

wait || exit 1 # fail if any child failed
