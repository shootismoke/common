import * as t from 'io-ts';

import { OpenAQCodec } from '../../util';

/**
 * @see https://github.com/openaq/openaq-data-format
 */
export const OpenAQResponseCodec = t.type({
  meta: t.type({
    found: t.number,
    license: t.string,
    limit: t.number,
    name: t.string,
    page: t.number,
    website: t.string
  }),
  results: t.array(OpenAQCodec)
});

const OpenAQErrorCodec = t.type({
  error: t.string,
  message: t.string,
  statusCode: t.number,
  validation: t.type({ keys: t.record(t.number, t.string), source: t.string })
});

/**
 * @see https://github.com/openaq/openaq-data-format
 */
export type OpenAQResponse = t.TypeOf<typeof OpenAQResponseCodec>;
export type OpenAQError = t.TypeOf<typeof OpenAQErrorCodec>;
