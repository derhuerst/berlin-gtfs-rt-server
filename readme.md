# berlin-gtfs-rt-server

**Poll the [VBB](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg) [HAFAS endpoint](https://github.com/public-transport/vbb-hafas) to provide a [GTFS Realtime (GTFS-RT)](https://gtfs.org/reference/realtime/v2/) feed for Berlin & Brandenburg.**

![ISC-licensed](https://img.shields.io/github/license/derhuerst/berlin-gtfs-rt-server.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)

This project

1. uses [`hafas-client`](https://github.com/public-transport/hafas-client) & [`hafas-monitor-trips`](https://github.com/derhuerst/hafas-monitor-trips) to fetch live data about all vehicles in the Berlin & Brandenburg bounding box,
2. uses [`hafas-gtfs-rt-feed`](https://github.com/derhuerst/hafas-gtfs-rt-feed) & [`gtfs-rt-differential-to-full-dataset`](https://github.com/derhuerst/gtfs-rt-differential-to-full-dataset) to build a live [GTFS Realtime (GTFS-RT)](https://developers.google.com/transit/gtfs-realtime/) feed from the data,
3. uses [`serve-buffer`](https://github.com/derhuerst/serve-buffer) to serve the feed efficiently.


## Installing & running

### Prerequisites

`berlin-gtfs-rt-server` needs access to a [Redis](https://redis.io/) server, you can configure a custom host/port by setting the `REDIS_URL` environment variable. It also needs a [PostgreSQL](https://www.postgresql.org) 12+ server to work, you can configure access using the [`PG*` environment variables](https://www.postgresql.org/docs/12/libpq-envars.html).

```shell
git clone https://github.com/derhuerst/berlin-gtfs-rt-server.git
cd berlin-gtfs-rt-server
npm install --production
```

### Building the matching index

```shell
npm run build
```

The build script will download [the latest VBB GTFS Static data](https://vbb-gtfs.jannisr.de/latest/) and import it into PostgreSQL. Then, it will add [additional lookup tables to match realtime data with GTFS Static data](https://github.com/derhuerst/match-gtfs-rt-to-gtfs). [`psql`](https://www.postgresql.org/docs/current/app-psql.html) will need to have access to your database.

### Running

Specify the bounding box to be observed as JSON:

```shell
export BBOX='{"north": 52.52, "west": 13.36, "south": 52.5, "east": 13.39}'
```

`berlin-gtfs-rt-server` is split into three parts: polling the HAFAS endpoint, matching realtime data & serving a GTFS-RT feed. These parts are implemented as separate processes:

```shell
node monitor.js | node match.js | node serve.js
```

*Note:* I recommend to run them with [`set -o pipefail`](https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/). Also, use a tool like [`systemctl`](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units) or [`forever`](https://github.com/foreversd/forever#readme) that restarts them when they crash.
