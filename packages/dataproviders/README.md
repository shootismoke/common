[![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/dataproviders.svg)](https://www.npmjs.com/package/@shootismoke/dataproviders)
[![dependencies Status](https://david-dm.org/shootismoke/common/status.svg?path=packages/dataproviders)](https://david-dm.org/shootismoke/common?path=packages/dataproviders)

# `@shootismoke/dataproviders`

A library to fetch air quality data from various providers (AqiCN, OpenAQ...), as well as normalizing data into one common format: the [openaq-data-format](#normalized-data-format).

## Supported Air Quality Indexes

| Provider | Provider Code | Website            | Notes                                                                   |
| -------- | ------------- | ------------------ | ----------------------------------------------------------------------- |
| AqiCN    | `aqicn`       | https://aqicn.org  | API token needed, get one [here](https://aqicn.org/data-platform/token) |
| WAQI     | `waqi`        | https://waqi.info/ | Same institution as AqiCN                                               |
| OpenAQ   | `openaq`      | https://openaq.org |                                                                         |

## ⚡ Get Started

Install the package:

```bash
yarn install @shootismoke/dataproviders
```

The package mainly exposes a couple of data providers (see list above), and for each data provider, there are two main functions:

- `fetchByGps({ latitude, longitude }, options?)` - Fetch air quality data by GPS coordinates
- `fetchByStation(stationId, options?)` - Fetch air quality data by station ID

### Usage with `fp-ts`

The codebase uses [`io-ts`](https://github.com/gcanti/io-ts) to perform runtime data validation, the results are functional programming datatypes (`Either<E,A>`, `Task<E,A>`). It's recommended to use [`fp-ts`](https://github.com/gcanti/fp-ts) to manipulate the results.

```typescript
// Retrieve the providers by provider code
import { aqicn, openaq } from '@shootismoke/dataproviders';

aqicn.fetchByGps({ latitude: 45, longitude: 23 }); // Returns a TaskEither<Error, AqicnData>

// Usage with fp-ts

import { pipe } from 'fp-ts/lib/pipeable';
import { fold, map } from 'fp-ts/lib/TaskEither';

pipe(
  // Fetch data from station 'Coyhaique' on the OpenAQ platform
  openaq.fetchByStation('Coyhaique'),
  // Normalize the data
  map(openaq.normalizeByStation),
  // Depending on error/result case, do different stuff
  fold(
    // Do on error:
    error => {
      console.error(error);

      // ...snip...
    },
    // Do on success:
    results => {
      const normalized = results[0];
      console.log(`${normalized.value} ${normalized.unit}`); // Logs "34.5 µg/m³"

      // ...snip...
    }
  )
);
```

### Usage as `Promise`

If you don't want to use `fp-ts`, the package also exports the data providers as JavaScript `Promise`s.

```typescript
// Retrieve the providers by provider code
import { aqicn } from '@shootismoke/dataproviders/promise';

async function main() {
  const data = await aqicn.fetchByStation(1045);
  console.log(data.dominentpol); // Logs "pm25"

  const results = aqicn.normalize(data);
  const normalized = results[0];
  console.log(`${normalized.value} ${normalized.unit}`); // Logs "34.5 µg/m³"
}
```

### Normalized Data Format

If you use the `.normalizeByGps` or `.normalizeByStation` functions, the output of the function will be normalized. We follow the `openaq-data-format`, below are its **required** fields:

```typescript
/**
 * The OpenAQ data format. One such object represents one air quality _measurement_
 */
interface OpenAQ {
  date: {
    /**
     * ISO date string representing the local time
     */
    local: string;
    /**
     * ISO date string representing the UTC time
     */
    utc: string;
  };
  /**
   * A unique ID representing the location of a measurement (can be a station ID, a place...)
   */
  location: string;
  /**
   * The pollutant id (pm25, pm10, o3...)
   */
  parameter: Pollutant;
  /**
   * The pollutant id (pm25, pm10, o3...)
   */
  value: number;
  /**
   * The pollutant id (pm25, pm10, o3...)
   */
  unit: Unit;
}

/**
 * The normalized data is an array of OpenAQ measurements
 */
type Normalized = OpenAQ[];
```

See [`openaq-data-format`](https://github.com/openaq/openaq-data-format) for more information.

### Full Documentation

See the API reference documentation (TODO [#14](https://github.com/shootismoke/common/issues/14)).

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
