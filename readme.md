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

The build script, executed via `npm run build` will download [the latest VBB GTFS Static data](https://vbb-gtfs.jannisr.de/latest/) and build import it into PostgreSQL; Because it uses [`psql`](https://www.postgresql.org/docs/current/app-psql.html) for that, you can use the usual evironment variables to configure access to the database.

`berlin-gtfs-rt-server` expects a [Redis](https://redis.io/) server running on `127.0.0.1:6379` (default port), but you can set the `REDIS_URL` environment variable to change this; It needs a [PostgreSQL](https://www.postgresql.org) 12+ server, you can configure access using the [`PG*` environment variables](https://www.postgresql.org/docs/12/libpq-envars.html).

Specify the bounding box to be observed as JSON:

```shell
BBOX='{"north": 52.52, "west": 13.36, "south": 52.5, "east": 13.39}'
```

### via Docker

A Docker image [is available as `derhuerst/berlin-gtfs-rt-server`](https://hub.docker.com/r/derhuerst/berlin-gtfs-rt-server).

```shell
docker run -d -p 3000:3000 -e BBOX='…' derhuerst/berlin-gtfs-rt-server
```

*Note:* The Docker image does not contain the Redis server.

### manually

```shell
git clone https://github.com/derhuerst/berlin-gtfs-rt-server.git
cd berlin-gtfs-rt-server

npm install --production
npm run build

env BBOX='…' node monitor.js | node match.js | node serve.js
```
