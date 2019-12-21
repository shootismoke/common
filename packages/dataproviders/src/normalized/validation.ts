import * as t from 'io-ts';

import {
  attributionsCodec,
  latLngCodec,
  pollutantCodec,
  sourceTypeCodec,
  unitCodec
} from '../util';

/**
 * @see https://github.com/openaq/openaq-data-format
 */
export const OpenAQCodec = t.type({
  attribution: t.union([attributionsCodec, t.undefined]),
  averagingPeriod: t.type({
    unit: t.string,
    value: t.number
  }),
  city: t.string,
  coordinates: latLngCodec,
  country: t.string,
  date: t.type({
    local: t.string,
    utc: t.string
  }),
  location: t.string,
  mobile: t.boolean,
  parameter: pollutantCodec,
  sourceName: t.string,
  sourceType: sourceTypeCodec,
  value: t.number,
  unit: unitCodec
});

/**
 * @see https://github.com/openaq/openaq-data-format
 */
export type OpenAQ = t.TypeOf<typeof OpenAQCodec>;
