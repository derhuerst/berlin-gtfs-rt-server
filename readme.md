# berlin-gtfs-rt-server

**Poll the [VBB](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg) [HAFAS endpoint](https://github.com/public-transport/vbb-hafas) to provide a [GTFS Realtime (GTFS-RT)](https://gtfs.org/reference/realtime/v2/) feed for Berlin & Brandenburg.**

![ISC-licensed](https://img.shields.io/github/license/derhuerst/berlin-gtfs-rt-server.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)


## Installing & running

### via Docker

A Docker image [is available as `derhuerst/berlin-gtfs-rt-server`](https://hub.docker.com/r/derhuerst/berlin-gtfs-rt-server).

```shell
docker run -d -p 3000:3000 -e BBOX='…' derhuerst/berlin-gtfs-rt-server
```

### manually

```shell
git clone https://github.com/derhuerst/berlin-gtfs-rt-server.git
cd berlin-gtfs-rt-server
npm install --production

node index.js
```
