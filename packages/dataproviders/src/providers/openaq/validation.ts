import * as t from 'io-ts';

import { OpenAQCodec } from '../../util';

const OpenAQMetaCodec = t.type({
	found: t.number,
	license: t.string,
	limit: t.number,
	name: t.string,
	page: t.number,
	website: t.string,
});

/**
 * Codec for the /v2/measurements endpoint.
 *
 * @see https://docs.openaq.org/#/v2/measurements_get_v2_measurements_get
 */
export const OpenAQMeasurementsCodec = t.type({
	meta: OpenAQMetaCodec,
	results: t.array(OpenAQCodec),
});

/**
 * Return type for the /v2/measurements endpoint.
 *
 * @see https://docs.openaq.org/#/v2/measurements_get_v2_measurements_get
 */
export type OpenAQMeasurements = t.TypeOf<typeof OpenAQMeasurementsCodec>;
