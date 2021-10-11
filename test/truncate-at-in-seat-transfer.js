'use strict'

const {deepStrictEqual} = require('assert')
const truncateTripAtInSeatTransfer = require('../lib/truncate-at-in-seat-transfer')

const tripWithInSeatTransfer = {
	"id": "1|58020|0|86|11102021",
	"line": {
		"type": "line",
		"id": "134",
		"fahrtNr": "3504",
		"name": "134",
		"public": true,
		"adminCode": "BVB",
		"productName": "Bus",
		"mode": "bus",
		"product": "bus",
		"operator": {
			"type": "operator",
			"id": "berliner-verkehrsbetriebe",
			"name": "Berliner Verkehrsbetriebe"
		},
		"symbol": null,
		"nr": 134,
		"metro": false,
		"express": false,
		"night": false
	},
	"direction": "S+U Rathaus Spandau -> 135 Alt-Kladow",

	"origin": {
		"type": "stop",
		"id": "900000027304",
		"name": "Wasserwerk Spandau",
		"location": {
			"type": "location",
			"id": "900027304",
			"latitude": 52.556665,
			"longitude": 13.16419
		},
		"products": {
			"suburban": false,
			"subway": false,
			"tram": false,
			"bus": true,
			"ferry": false,
			"express": false,
			"regional": false
		}
	},
	"departure": "2021-10-11T12:37:00+02:00",
	"plannedDeparture": "2021-10-11T12:37:00+02:00",
	"departureDelay": null,
	"departurePlatform": null,
	"plannedDeparturePlatform": null,

	"remarks": [
		{
			"type": "hint",
			"code": "bf",
			"text": "barrierefrei"
		},
		{
			"type": "hint",
			"code": "text.journeystop.product.or.direction.changes.journey.message",
			"text": "Verkehrt ab S+U Rathaus Spandau (Berlin) als 135 in Richtung Alt-Kladow"
		}
	],

	"destination": {
		"type": "stop",
		"id": "900000039102",
		"name": "Alt-Kladow",
		"location": {
			"type": "location",
			"id": "900039102",
			"latitude": 52.454179,
			"longitude": 13.144288
		},
		"products": {
			"suburban": false,
			"subway": false,
			"tram": false,
			"bus": true,
			"ferry": true,
			"express": false,
			"regional": false
		}
	},
	"arrival": "2021-10-11T13:18:00+02:00",
	"plannedArrival": "2021-10-11T13:18:00+02:00",
	"arrivalDelay": null,
	"arrivalPlatform": null,
	"plannedArrivalPlatform": null,

	"stopovers": [
		{
			"stop": {
				"type": "stop",
				"id": "900000027304",
				"name": "Wasserwerk Spandau",
				"location": {
					"type": "location",
					"id": "900027304",
					"latitude": 52.556665,
					"longitude": 13.16419
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": null,
			"plannedArrival": null,
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:37:00+02:00",
			"plannedDeparture": "2021-10-11T12:37:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "text.journeystop.product.or.direction.changes.stop.message",
					"text": "Verkehrt ab hier als 134 in Richtung S+U Rathaus Spandau -> 135 Alt-Kladow"
				},
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"id": "118634",
					"type": "warning",
					"summary": "Gemeinsam sicher unterwegs - mit Abstand und medizinischer Maske (in Berlin: FFP2)!",
					"text": "An Haltestellen und Bahnhöfen sowie in Fahrzeugen. Maskenmuffel riskieren mindestens 50 Euro.\n<a href=\"https://www.vbb.de/corona\" target=\"_blank\" rel=\"noopener\">Weitere Informationen</a>",
					"icon": {
						"type": "HIM0",
						"title": null
					},
					"priority": 100,
					"products": {
						"suburban": true,
						"subway": true,
						"tram": true,
						"bus": true,
						"ferry": true,
						"express": true,
						"regional": true
					},
					"company": "VBB",
					"categories": [
						0
					],
					"validFrom": "2021-04-24T00:00:00+02:00",
					"validUntil": "2022-12-31T00:00:00+01:00",
					"modified": "2021-06-12T07:43:36+02:00"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027354",
				"name": "Wolburgsweg",
				"location": {
					"type": "location",
					"id": "900027354",
					"latitude": 52.555613,
					"longitude": 13.169251
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:38:00+02:00",
			"plannedArrival": "2021-10-11T12:38:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:38:00+02:00",
			"plannedDeparture": "2021-10-11T12:38:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027355",
				"name": "Frankenwaldstr.",
				"location": {
					"type": "location",
					"id": "900027355",
					"latitude": 52.5544,
					"longitude": 13.174743
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:39:00+02:00",
			"plannedArrival": "2021-10-11T12:39:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:39:00+02:00",
			"plannedDeparture": "2021-10-11T12:39:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027356",
				"name": "Friedhof In den Kisseln",
				"location": {
					"type": "location",
					"id": "900027356",
					"latitude": 52.553087,
					"longitude": 13.18002
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:41:00+02:00",
			"plannedArrival": "2021-10-11T12:41:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:41:00+02:00",
			"plannedDeparture": "2021-10-11T12:41:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027402",
				"name": "Pionierstr./Zeppelinstr.",
				"location": {
					"type": "location",
					"id": "900027402",
					"latitude": 52.551505,
					"longitude": 13.185575
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:42:00+02:00",
			"plannedArrival": "2021-10-11T12:42:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:42:00+02:00",
			"plannedDeparture": "2021-10-11T12:42:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027455",
				"name": "Falkenhagener Tor",
				"location": {
					"type": "location",
					"id": "900027455",
					"latitude": 52.550202,
					"longitude": 13.190259
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:43:00+02:00",
			"plannedArrival": "2021-10-11T12:43:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:43:00+02:00",
			"plannedDeparture": "2021-10-11T12:43:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029204",
				"name": "Windmühlenberg",
				"location": {
					"type": "location",
					"id": "900029204",
					"latitude": 52.548638,
					"longitude": 13.194349
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:44:00+02:00",
			"plannedArrival": "2021-10-11T12:44:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:44:00+02:00",
			"plannedDeparture": "2021-10-11T12:44:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029251",
				"name": "Kurze Str./Mittelstr.",
				"location": {
					"type": "location",
					"id": "900029251",
					"latitude": 52.54622,
					"longitude": 13.200075
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:46:00+02:00",
			"plannedArrival": "2021-10-11T12:46:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:46:00+02:00",
			"plannedDeparture": "2021-10-11T12:46:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029201",
				"name": "Wröhmännerpark",
				"location": {
					"type": "location",
					"id": "900029201",
					"latitude": 52.542049,
					"longitude": 13.205954
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:48:00+02:00",
			"plannedArrival": "2021-10-11T12:48:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:48:00+02:00",
			"plannedDeparture": "2021-10-11T12:48:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029202",
				"name": "Moritzstr.",
				"location": {
					"type": "location",
					"id": "900029202",
					"latitude": 52.538606,
					"longitude": 13.200722
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:50:00+02:00",
			"plannedArrival": "2021-10-11T12:50:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:50:00+02:00",
			"plannedDeparture": "2021-10-11T12:50:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029302",
				"name": "S+U Rathaus Spandau",
				"location": {
					"type": "location",
					"id": "900029302",
					"latitude": 52.535801,
					"longitude": 13.199895
				},
				"products": {
					"suburban": true,
					"subway": true,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": true,
					"regional": true
				}
			},
			"arrival": "2021-10-11T12:51:00+02:00",
			"plannedArrival": "2021-10-11T12:51:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:51:00+02:00",
			"plannedDeparture": "2021-10-11T12:51:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "text.journeystop.product.or.direction.changes.stop.message",
					"text": "Verkehrt ab hier als 135 in Richtung Alt-Kladow"
				},
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000031101",
				"name": "Brunsbütteler Damm/Ruhlebener Str.",
				"location": {
					"type": "location",
					"id": "900031101",
					"latitude": 52.53296,
					"longitude": 13.198196
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:53:00+02:00",
			"plannedArrival": "2021-10-11T12:53:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:53:00+02:00",
			"plannedDeparture": "2021-10-11T12:53:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000031102",
				"name": "Ziegelhof",
				"location": {
					"type": "location",
					"id": "900031102",
					"latitude": 52.529041,
					"longitude": 13.195347
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:54:00+02:00",
			"plannedArrival": "2021-10-11T12:54:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:54:00+02:00",
			"plannedDeparture": "2021-10-11T12:54:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000032405",
				"name": "Metzer Str.",
				"location": {
					"type": "location",
					"id": "900032405",
					"latitude": 52.525212,
					"longitude": 13.193657
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:56:00+02:00",
			"plannedArrival": "2021-10-11T12:56:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:56:00+02:00",
			"plannedDeparture": "2021-10-11T12:56:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000032104",
				"name": "Melanchthonplatz",
				"location": {
					"type": "location",
					"id": "900032104",
					"latitude": 52.521661,
					"longitude": 13.188928
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:58:00+02:00",
			"plannedArrival": "2021-10-11T12:58:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:58:00+02:00",
			"plannedDeparture": "2021-10-11T12:58:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000032101",
				"name": "Am Omnibushof",
				"location": {
					"type": "location",
					"id": "900032101",
					"latitude": 52.517616,
					"longitude": 13.186241
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:59:00+02:00",
			"plannedArrival": "2021-10-11T12:59:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:59:00+02:00",
			"plannedDeparture": "2021-10-11T12:59:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000032102",
				"name": "Heerstr./Wilhelmstr.",
				"location": {
					"type": "location",
					"id": "900032102",
					"latitude": 52.51669,
					"longitude": 13.179157
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:01:00+02:00",
			"plannedArrival": "2021-10-11T13:01:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:01:00+02:00",
			"plannedDeparture": "2021-10-11T13:01:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000032155",
				"name": "Rodensteinstr.",
				"location": {
					"type": "location",
					"id": "900032155",
					"latitude": 52.513733,
					"longitude": 13.174833
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:03:00+02:00",
			"plannedArrival": "2021-10-11T13:03:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:03:00+02:00",
			"plannedDeparture": "2021-10-11T13:03:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000032103",
				"name": "Weinmeisterhornweg",
				"location": {
					"type": "location",
					"id": "900032103",
					"latitude": 52.511018,
					"longitude": 13.171579
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:04:00+02:00",
			"plannedArrival": "2021-10-11T13:04:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:04:00+02:00",
			"plannedDeparture": "2021-10-11T13:04:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000032156",
				"name": "Karolinenhöhe",
				"location": {
					"type": "location",
					"id": "900032156",
					"latitude": 52.50842,
					"longitude": 13.167579
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:05:00+02:00",
			"plannedArrival": "2021-10-11T13:05:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:05:00+02:00",
			"plannedDeparture": "2021-10-11T13:05:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000038103",
				"name": "Landschaftsfriedhof Gatow",
				"location": {
					"type": "location",
					"id": "900038103",
					"latitude": 52.498334,
					"longitude": 13.152855
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:07:00+02:00",
			"plannedArrival": "2021-10-11T13:07:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:07:00+02:00",
			"plannedDeparture": "2021-10-11T13:07:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000038256",
				"name": "Außenweg",
				"location": {
					"type": "location",
					"id": "900038256",
					"latitude": 52.485183,
					"longitude": 13.135532
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:09:00+02:00",
			"plannedArrival": "2021-10-11T13:09:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:09:00+02:00",
			"plannedDeparture": "2021-10-11T13:09:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000039101",
				"name": "Gutsstr.",
				"location": {
					"type": "location",
					"id": "900039101",
					"latitude": 52.474935,
					"longitude": 13.12097
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:11:00+02:00",
			"plannedArrival": "2021-10-11T13:11:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:11:00+02:00",
			"plannedDeparture": "2021-10-11T13:11:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000039159",
				"name": "Kurpromenade",
				"location": {
					"type": "location",
					"id": "900039159",
					"latitude": 52.470773,
					"longitude": 13.123568
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:12:00+02:00",
			"plannedArrival": "2021-10-11T13:12:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:12:00+02:00",
			"plannedDeparture": "2021-10-11T13:12:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000039158",
				"name": "Seekorso",
				"location": {
					"type": "location",
					"id": "900039158",
					"latitude": 52.467906,
					"longitude": 13.126435
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:13:00+02:00",
			"plannedArrival": "2021-10-11T13:13:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:13:00+02:00",
			"plannedDeparture": "2021-10-11T13:13:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000039108",
				"name": "Waldallee",
				"location": {
					"type": "location",
					"id": "900039108",
					"latitude": 52.465586,
					"longitude": 13.129015
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:14:00+02:00",
			"plannedArrival": "2021-10-11T13:14:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:14:00+02:00",
			"plannedDeparture": "2021-10-11T13:14:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000039157",
				"name": "Gredinger Str.",
				"location": {
					"type": "location",
					"id": "900039157",
					"latitude": 52.46164,
					"longitude": 13.133726
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:15:00+02:00",
			"plannedArrival": "2021-10-11T13:15:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:15:00+02:00",
			"plannedDeparture": "2021-10-11T13:15:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000039156",
				"name": "Schwabinger Weg",
				"location": {
					"type": "location",
					"id": "900039156",
					"latitude": 52.458224,
					"longitude": 13.138139
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:16:00+02:00",
			"plannedArrival": "2021-10-11T13:16:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:16:00+02:00",
			"plannedDeparture": "2021-10-11T13:16:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000039155",
				"name": "Schallweg",
				"location": {
					"type": "location",
					"id": "900039155",
					"latitude": 52.456058,
					"longitude": 13.140791
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:17:00+02:00",
			"plannedArrival": "2021-10-11T13:17:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T13:17:00+02:00",
			"plannedDeparture": "2021-10-11T13:17:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000039102",
				"name": "Alt-Kladow",
				"location": {
					"type": "location",
					"id": "900039102",
					"latitude": 52.454179,
					"longitude": 13.144288
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": true,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T13:18:00+02:00",
			"plannedArrival": "2021-10-11T13:18:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": null,
			"plannedDeparture": null,
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				}
			]
		}
	]
}

const truncatedTrip = truncateTripAtInSeatTransfer(tripWithInSeatTransfer)

deepStrictEqual(truncatedTrip, {
	"id": "1|58020|0|86|11102021",
	"line": {
		"type": "line",
		"id": "134",
		"fahrtNr": "3504",
		"name": "134",
		"public": true,
		"adminCode": "BVB",
		"productName": "Bus",
		"mode": "bus",
		"product": "bus",
		"operator": {
			"type": "operator",
			"id": "berliner-verkehrsbetriebe",
			"name": "Berliner Verkehrsbetriebe"
		},
		"symbol": null,
		"nr": 134,
		"metro": false,
		"express": false,
		"night": false
	},
	"direction": "S+U Rathaus Spandau -> 135 Alt-Kladow",

	"origin": {
		"type": "stop",
		"id": "900000027304",
		"name": "Wasserwerk Spandau",
		"location": {
			"type": "location",
			"id": "900027304",
			"latitude": 52.556665,
			"longitude": 13.16419
		},
		"products": {
			"suburban": false,
			"subway": false,
			"tram": false,
			"bus": true,
			"ferry": false,
			"express": false,
			"regional": false
		}
	},
	"departure": "2021-10-11T12:37:00+02:00",
	"plannedDeparture": "2021-10-11T12:37:00+02:00",
	"departureDelay": null,
	"departurePlatform": null,
	"plannedDeparturePlatform": null,

	"remarks": [
		{
			"type": "hint",
			"code": "bf",
			"text": "barrierefrei"
		},
		{
			"type": "hint",
			"code": "text.journeystop.product.or.direction.changes.journey.message",
			"text": "Verkehrt ab S+U Rathaus Spandau (Berlin) als 135 in Richtung Alt-Kladow"
		}
	],

	"destination": {
		"type": "stop",
		"id": "900000029302",
		"name": "S+U Rathaus Spandau",
		"location": {
			"type": "location",
			"id": "900029302",
			"latitude": 52.535801,
			"longitude": 13.199895
		},
		"products": {
			"suburban": true,
			"subway": true,
			"tram": false,
			"bus": true,
			"ferry": false,
			"express": true,
			"regional": true
		}
	},
	"arrival": "2021-10-11T12:51:00+02:00",
	"plannedArrival": "2021-10-11T12:51:00+02:00",
	"arrivalDelay": null,
	"arrivalPlatform": null,
	"plannedArrivalPlatform": null,

	"stopovers": [
		{
			"stop": {
				"type": "stop",
				"id": "900000027304",
				"name": "Wasserwerk Spandau",
				"location": {
					"type": "location",
					"id": "900027304",
					"latitude": 52.556665,
					"longitude": 13.16419
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": null,
			"plannedArrival": null,
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:37:00+02:00",
			"plannedDeparture": "2021-10-11T12:37:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "text.journeystop.product.or.direction.changes.stop.message",
					"text": "Verkehrt ab hier als 134 in Richtung S+U Rathaus Spandau -> 135 Alt-Kladow"
				},
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"id": "118634",
					"type": "warning",
					"summary": "Gemeinsam sicher unterwegs - mit Abstand und medizinischer Maske (in Berlin: FFP2)!",
					"text": "An Haltestellen und Bahnhöfen sowie in Fahrzeugen. Maskenmuffel riskieren mindestens 50 Euro.\n<a href=\"https://www.vbb.de/corona\" target=\"_blank\" rel=\"noopener\">Weitere Informationen</a>",
					"icon": {
						"type": "HIM0",
						"title": null
					},
					"priority": 100,
					"products": {
						"suburban": true,
						"subway": true,
						"tram": true,
						"bus": true,
						"ferry": true,
						"express": true,
						"regional": true
					},
					"company": "VBB",
					"categories": [
						0
					],
					"validFrom": "2021-04-24T00:00:00+02:00",
					"validUntil": "2022-12-31T00:00:00+01:00",
					"modified": "2021-06-12T07:43:36+02:00"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027354",
				"name": "Wolburgsweg",
				"location": {
					"type": "location",
					"id": "900027354",
					"latitude": 52.555613,
					"longitude": 13.169251
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:38:00+02:00",
			"plannedArrival": "2021-10-11T12:38:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:38:00+02:00",
			"plannedDeparture": "2021-10-11T12:38:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027355",
				"name": "Frankenwaldstr.",
				"location": {
					"type": "location",
					"id": "900027355",
					"latitude": 52.5544,
					"longitude": 13.174743
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:39:00+02:00",
			"plannedArrival": "2021-10-11T12:39:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:39:00+02:00",
			"plannedDeparture": "2021-10-11T12:39:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027356",
				"name": "Friedhof In den Kisseln",
				"location": {
					"type": "location",
					"id": "900027356",
					"latitude": 52.553087,
					"longitude": 13.18002
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:41:00+02:00",
			"plannedArrival": "2021-10-11T12:41:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:41:00+02:00",
			"plannedDeparture": "2021-10-11T12:41:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027402",
				"name": "Pionierstr./Zeppelinstr.",
				"location": {
					"type": "location",
					"id": "900027402",
					"latitude": 52.551505,
					"longitude": 13.185575
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:42:00+02:00",
			"plannedArrival": "2021-10-11T12:42:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:42:00+02:00",
			"plannedDeparture": "2021-10-11T12:42:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000027455",
				"name": "Falkenhagener Tor",
				"location": {
					"type": "location",
					"id": "900027455",
					"latitude": 52.550202,
					"longitude": 13.190259
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:43:00+02:00",
			"plannedArrival": "2021-10-11T12:43:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:43:00+02:00",
			"plannedDeparture": "2021-10-11T12:43:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029204",
				"name": "Windmühlenberg",
				"location": {
					"type": "location",
					"id": "900029204",
					"latitude": 52.548638,
					"longitude": 13.194349
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:44:00+02:00",
			"plannedArrival": "2021-10-11T12:44:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:44:00+02:00",
			"plannedDeparture": "2021-10-11T12:44:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029251",
				"name": "Kurze Str./Mittelstr.",
				"location": {
					"type": "location",
					"id": "900029251",
					"latitude": 52.54622,
					"longitude": 13.200075
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:46:00+02:00",
			"plannedArrival": "2021-10-11T12:46:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:46:00+02:00",
			"plannedDeparture": "2021-10-11T12:46:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029201",
				"name": "Wröhmännerpark",
				"location": {
					"type": "location",
					"id": "900029201",
					"latitude": 52.542049,
					"longitude": 13.205954
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:48:00+02:00",
			"plannedArrival": "2021-10-11T12:48:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:48:00+02:00",
			"plannedDeparture": "2021-10-11T12:48:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029202",
				"name": "Moritzstr.",
				"location": {
					"type": "location",
					"id": "900029202",
					"latitude": 52.538606,
					"longitude": 13.200722
				},
				"products": {
					"suburban": false,
					"subway": false,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": false,
					"regional": false
				}
			},
			"arrival": "2021-10-11T12:50:00+02:00",
			"plannedArrival": "2021-10-11T12:50:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:50:00+02:00",
			"plannedDeparture": "2021-10-11T12:50:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		},
		{
			"stop": {
				"type": "stop",
				"id": "900000029302",
				"name": "S+U Rathaus Spandau",
				"location": {
					"type": "location",
					"id": "900029302",
					"latitude": 52.535801,
					"longitude": 13.199895
				},
				"products": {
					"suburban": true,
					"subway": true,
					"tram": false,
					"bus": true,
					"ferry": false,
					"express": true,
					"regional": true
				}
			},
			"arrival": "2021-10-11T12:51:00+02:00",
			"plannedArrival": "2021-10-11T12:51:00+02:00",
			"arrivalDelay": null,
			"arrivalPlatform": null,
			"plannedArrivalPlatform": null,
			"departure": "2021-10-11T12:51:00+02:00",
			"plannedDeparture": "2021-10-11T12:51:00+02:00",
			"departureDelay": null,
			"departurePlatform": null,
			"plannedDeparturePlatform": null,
			"remarks": [
				{
					"type": "hint",
					"code": "text.journeystop.product.or.direction.changes.stop.message",
					"text": "Verkehrt ab hier als 135 in Richtung Alt-Kladow"
				},
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				},
				{
					"type": "hint",
					"code": "OPERATOR",
					"text": "BVG (S+U Rathaus Spandau (Berlin) - Alt-Kladow (Berlin))"
				},
				{
					"type": "hint",
					"code": "px",
					"text": "ab S+U Rathaus Spandau weiter als Bus 135 bis Alt-Kladow (Wasserwerk Spandau (Berlin) - S+U Rathaus Spandau (Berlin))"
				}
			]
		}
	]
}, 'truncated trip is different')

console.info('truncateTripAtInSeatTransfer seems to work ✔︎')
