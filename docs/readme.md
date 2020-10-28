# Inofficial [GTFS Realtime](https://gtfs.org/reference/realtime/v2/) feed for Berlin & Brandenburg

**This endpoint provides realtime transit data for Berlin & Brandenburg in the [GTFS Realtime (GTFS-RT)](https://gtfs.org/reference/realtime/v2/) format.**

Underneath, it works by polling the [VBB](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg) [HAFAS endpoint](https://github.com/public-transport/vbb-hafas) underneath. Those interested in delays of *all* vehicles, instead of a particular one, don't have to poll their API brute-force: They're able to fetch this information efficiently.

*Note:* This feed is run by people *not related* to [VBB](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg), [BVG](https://en.wikipedia.org/wiki/Berliner_Verkehrsbetriebe) and the government. Also, it might go offline at any time!

## Why use this API?

### Realtime Data

This API returns realtime data whenever the [API for VBB's mobile app](https://github.com/public-transport/hafas-client/blob/33d7d30acf235c54887c6459a15fe581982c6a19/p/vbb/readme.md) provides it.

### No API Key

You can just use the API without authentication.

### CORS

This API has [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) enabled, so you can query it from any webpage.

### Caching-friendly

This API sends [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) & [`Date`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date) headers, allowing clients to cache responses properly.
