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

/**
 * @see https://github.com/openaq/openaq-data-format
 */
export type OpenAQResponse = t.TypeOf<typeof OpenAQResponseCodec>;
