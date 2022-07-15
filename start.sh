#!/usr/bin/env bash

set -e
set -o pipefail

lib="$(dirname $(realpath $0))/lib"

# kill child processes on exit
# https://stackoverflow.com/questions/360201/how-do-i-kill-background-processes-jobs-when-my-shell-script-exits/2173421#2173421
trap 'exit_code=$?; kill -- $(jobs -p); exit $exit_code' SIGINT SIGTERM EXIT

NODE_ENV=production node_modules/.bin/monitor-hafas \
	--trips-fetch-mode on-demand \
	$lib/hafas.js \
	&

NODE_ENV=production node_modules/.bin/match-with-gtfs \
	$lib/hafas-info.js $lib/gtfs-info.js \
	&

NODE_ENV=production node_modules/.bin/serve-as-gtfs-rt \
	--signal-demand \
	--static-feed-url 'https://vbb-gtfs.jannisr.de/latest/' \
	&

# fail if any child process failed, running into the trap above
# Note: `wait` (without any flags) waits for *all* child processes to finish. Bash 5.0 introduced `wait -n`, which only waits until *one* job has exited. macOS bundles bash 3.2. 🙄
wait -n || exit 1
