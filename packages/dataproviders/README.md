[![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/dataproviders.svg)](https://www.npmjs.com/package/@shootismoke/dataproviders)
[![dependencies Status](https://david-dm.org/shootismoke/common/status.svg?path=packages/dataproviders)](https://david-dm.org/shootismoke/common?path=packages/dataproviders)
[![Maintainability](https://api.codeclimate.com/v1/badges/2d517984b9b528fcd3cd/maintainability)](https://codeclimate.com/github/shootismoke/common/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2d517984b9b528fcd3cd/test_coverage)](https://codeclimate.com/github/shootismoke/common/test_coverage)

# `@shootismoke/dataproviders`

A library to fetch air quality data from various providers (AQICN, OpenAQ...) and normalizing data into one common format: the [openaq-data-format](#normalized-data-format).

## Supported Air Quality Providers

| Provider  | Provider Code | Website            | Notes                                                                            |
| --------- | ------------- | ------------------ | -------------------------------------------------------------------------------- |
| AQICN     | `aqicn`       | https://aqicn.org  | API token needed, get one for free [here](https://aqicn.org/data-platform/token) |
| WAQI      | `waqi`        | https://waqi.info/ | Same institution as AqiCN                                                        |
| OpenAQ v2 | `openaq`      | https://openaq.org |                                                                                  |

We plan to support more air quality providers in the future see [issue #29](https://github.com/shootismoke/common/issues/29).

## ⚡ Get Started

Install the package:

```bash
yarn install @shootismoke/dataproviders
```

The package exposes a couple of data providers (see list above), and for each data provider, there are two main functions:

-   `fetchByGps({ latitude, longitude }, options?)` - Fetch air quality data by GPS coordinates.
-   `fetchByStation(stationId, options?)` - Fetch air quality data by station ID.

```typescript
// Retrieve the providers by provider code.
import { aqicn, openaq } from '@shootismoke/dataproviders';

async function main() {
	// Fetch the station 1045 on AQICN.
	const data = await aqicn.fetchByStation(1045);
	console.log(data.dominentpol); // `dominentpol` is a field specific to AQICN. This logs "pm25".

	const results = aqicn.normalizeByStation(data); // `results` is an array of normalized OpenAQResults.
	const res = results[0];
	console.log(`${res.parameter}: ${res.value} ${res.unit}`); // Logs "pm25: 34.5 µg/m³".

	// Note how `data.dominentpol` has been converted to `res.parameter`: this is
	// what we call "normalization" in @shootismoke/providers.
}
```

### Usage with `fp-ts`

The codebase uses [`io-ts`](https://github.com/gcanti/io-ts) under the hood to perform runtime data validation, the results are functional programming datatypes (`Either<E,A>`, `Task<E,A>`...). If you are already using `io-ts` and `fp-ts`](https://github.com/gcanti/fp-ts) in your project, it's recommended to import from the `/lib/fp` subfolder directly.

```typescript
// Retrieve the providers by provider code, using fp-ts.
import { aqicn, openaq } from '@shootismoke/dataproviders/lib/fp';

aqicn.fetchByGps({ latitude: 45, longitude: 23 }); // Returns a TaskEither<Error, AqicnData>
```

Here's a real-world example:

```typescript
import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';

pipe(
	// Fetch data from station 'Coyhaique' on the OpenAQ platform.
	openaq.fetchByStation('Coyhaique'),
	// Normalize the data.
	TE.chain((response) => TE.fromEither(normalize(response))),
	// Depending on error/result case, do different stuff
	TE.fold(
		// Do on error:
		(error) => {
			console.error(error);

			// -- snip --
		},
		// Do on success:
		(results) => {
			const res = results[0]; // `results` is an array of normalized OpenAQ objects
			console.log(`${res.value} ${res.unit}`); // Logs "34.5 µg/m³"

			// -- snip --
		}
	)
);
```

### Normalized Data Format

If you use the `.normalizeByGps` or `.normalizeByStation` functions, the output will be normalized, i.e. in the same format no matter which provider you use. We follow the [`openaq-data-format`](https://github.com/openaq/openaq-data-format), below are some of its most frequently used fields:

```typescript
/**
 * The OpenAQ data format. One such object represents one air quality
 * measurement
 */
interface OpenAQResult {
	/**
	 * City (or regional approximation) containing location
	 */
	city?: string;
	/**
	 * Coordinates where the measurement took place. Note that in the
	 * openaq-data-format, this field is optional. Using this library, this field
	 * will **always** be populated
	 */
	coordinates?: {
		latitude: number;
		longitude: number;
	};
	/**
	 * Country containing location in two letter ISO format
	 */
	country: string;
	/**
	 * Time of measurement including both local time and UTC time.
	 */
	date: {
		local: string;
		utc: string;
	};
	/**
	 * A unique ID representing the location of a measurement (can be a station
	 * ID, a place...)
	 */
	location: string;
	/**
	 * The pollutant id (pm25, pm10, o3...)
	 */
	parameter: Pollutant;
	/**
	 * The value of the measurement
	 */
	value: number;
	/**
	 * The unit the value is measured in (µg/m³, ppm)
	 */
	unit: Unit;
	// -- snip --
	// There are some other optional fields, see docs for more details.
}

/**
 * The normalized data is an array of OpenAQ results. We ensure there is
 * always at least one element in the Normalized array.
 */
type OpenAQResults = OpenAQResult[];
```

See [`openaq-data-format`](https://github.com/openaq/openaq-data-format) for more information.

### Full Documentation

See the API reference [documentation](./docs/globals.md).

## :raising_hand: Contribute

1. Fork the repo
2. Make your changes in your own fork
3. Make sure `yarn lint` and `yarn test` pass
4. Create a Pull Request on this repo

## Tests

Look out for `*.spec.ts` in the codebase. Run:

```bash
yarn test
```

## :newspaper: License

GPL-3.0. See [LICENSE](./LICENSE) file for more information.
