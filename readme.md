# berlin-gtfs-rt-server

**Poll the [VBB](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg) [HAFAS endpoint](https://github.com/public-transport/vbb-hafas) to provide a [GTFS Realtime (GTFS-RT)](https://gtfs.org/reference/realtime/v2/) feed for Berlin & Brandenburg.**

![ISC-licensed](https://img.shields.io/github/license/derhuerst/berlin-gtfs-rt-server.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)


## Installing & running

The build script, executed via `npm run build` will download [the latest VBB GTFS Static data](https://vbb-gtfs.jannisr.de/latest/) and build import it into PostgreSQL; Because it uses [`psql`](https://www.postgresql.org/docs/current/app-psql.html) for that, you can use the usual evironment variables to configure access to the database.

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

node index.js
```
