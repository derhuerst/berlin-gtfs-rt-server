# berlin-gtfs-rt-server

**Poll the [VBB](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg) [HAFAS endpoint](https://github.com/public-transport/vbb-hafas) to provide a [GTFS Realtime (GTFS-RT)](https://gtfs.org/reference/realtime/v2/) feed for Berlin & Brandenburg.**

[![Prosperity/Apache license](https://img.shields.io/static/v1?label=license&message=Prosperity%2FApache&color=0997E8)](#license)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)

This project uses [`hafas-client`](https://github.com/public-transport/hafas-client) & [`hafas-gtfs-rt-feed`](https://github.com/derhuerst/hafas-gtfs-rt-feed) to fetch live data about all vehicles in the Berlin & Brandenburg area and build a live [GTFS Realtime (GTFS-RT)](https://developers.google.com/transit/gtfs-realtime/) feed from them.


## Installing & running

*Note*: [`hafas-gtfs-rt-feed`](https://github.com/derhuerst/hafas-gtfs-rt-feed), the library used by this project for building the GTFS-RT feed, has more extensive docs. For brevity and to avoid duplication (with e.g. [`hamburg-gtfs-rt-server`](https://github.com/derhuerst/hamburg-gtfs-rt-server)), the following instructions just cover the basics.

### Prerequisites

`berlin-gtfs-rt-server` needs access to a [Redis](https://redis.io/) server, you can configure a custom host/port by setting the `REDIS_URL` environment variable.

It also needs access to a [PostgreSQL](https://www.postgresql.org) 14+ server; Pass custom [`PG*` environment variables](https://www.postgresql.org/docs/14/libpq-envars.html) if you run PostgreSQL in an unusual configuration.

It also needs access to a [NATS Streaming](https://nats-io.gitbook.io/legacy-nats-docs/nats-streaming-server-aka-stan) server (just follow its [installation guide](https://nats-io.gitbook.io/legacy-nats-docs/nats-streaming-server-aka-stan/stan-nats-streaming-server/installing)); Set the `NATS_STREAMING_URL` environment variable if you run it in an unusual configuration.

The [`start.sh` script](start.sh) requires at least Bash 5.0 to run (because it uses `5.0`); macOS currently bundles Bash 3.2, so use `brew install bash` to install an up-to-date version.

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

`berlin-gtfs-rt-server` uses `hafas-gtfs-rt-feed` underneath, which is split into three parts: polling the HAFAS endpoint (`monitor-hafas` CLI), matching realtime data (`match-with-gtf` CLI), and serving a GTFS-RT feed (`serve-as-gtfs-rt` CLI). You can run all three at once using the `start.sh` wrapper script:

```shell
./start.sh
```

In production, run all three using a tool that restarts them when they crash, e.g. [`systemctl`](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units), [`forever`](https://github.com/foreversd/forever#readme) or [Kubernetes](https://kubernetes.io).

### via Docker

A Docker image [is available as `derhuerst/berlin-gtfs-rt-server`](https://hub.docker.com/r/derhuerst/berlin-gtfs-rt-server).

*Note:* The Docker image *does not* contain Redis, PostgreSQL & NATS. You need to configure access to them using the environment variables documented above (e.g. `NATS_STREAMING_URL`).

```shell
export BBOX='{"north": 52.52, "west": 13.36, "south": 52.5, "east": 13.39}'
# build the matching index
docker run -e BBOX -i -t --rm derhuerst/berlin-gtfs-rt-server ./build.sh
# run
docker run -e BBOX -i -t --rm derhuerst/berlin-gtfs-rt-server
```

### via docker-compose

The example [`docker-compose.yml`](docker-compose.yml) starts up a complete set of containers (`berlin-gtfs-rt-server`, Redis, PostGIS/PostgreSQL, [NATS Streaming](https://nats-io.gitbook.io/legacy-nats-docs/nats-streaming-server-aka-stan)) to generate a GTFS-RT feed

Be sure to set `POSTGRES_PASSWORD`, either via a `.env` file or an environment variable.

The environment may be started via

```sh
POSTGRES_PASSWORD=mySecretPassword docker-compose up -d
```

After starting, the GTFS-RT feed should be available via `http://localhost:3000/`.

### inspecting the feed

Check out [`hafas-gtfs-rt-feed`'s *inspecting the feed* section](https://github.com/derhuerst/hafas-gtfs-rt-feed/blob/master/readme.md#inspecting-the-feed).

### metrics

Check out [`hafas-gtfs-rt-feed`'s *metrics* section](https://github.com/derhuerst/hafas-gtfs-rt-feed/blob/master/readme.md#metrics).


## License

This project is dual-licensed: **My contributions are licensed under the [*Prosperity Public License*](https://prosperitylicense.com), [contributions of other people](https://github.com/derhuerst/hafas-gtfs-rt-feed/graphs/contributors) are licensed as [Apache 2.0](https://apache.org/licenses/LICENSE-2.0)**.

> This license allows you to use and share this software for noncommercial purposes for free and to try this software for commercial purposes for thirty days.

> Personal use for research, experiment, and testing for the benefit of public knowledge, personal study, private entertainment, hobby projects, amateur pursuits, or religious observance, without any anticipated commercial application, doesn’t count as use for a commercial purpose.

~~[Buy a commercial license](https://licensezero.com/offers/todo) or~~ read more about [why I sell private licenses for my projects](https://gist.github.com/derhuerst/0ef31ee82b6300d2cafd03d10dd522f7).
