import { ppb, ppm, ugm3 } from '@shootismoke/convert';
import * as t from 'io-ts';

/**
 * @ignore
 */
export const attributionsCodec = t.union([
	t.array(
		t.intersection([
			t.type({
				name: t.string,
			}),
			t.partial({
				url: t.string,
			}),
		])
	),
	t.null,
]);

/**
 * @ignore
 */
export const latLngCodec = t.union([
	t.type({
		latitude: t.number,
		longitude: t.number,
	}),
	t.null,
]);

/**
 * @ignore
 */
export const pollutantCodec = t.union([
	// FIXME
	// Instead of rewriting these, can we use the types and array defined in
	// import { AllPollutants, Pollutant } from '@shootismoke/convert';
	t.literal('bc'),
	t.literal('ch4'),
	t.literal('co'),
	t.literal('c6h6'),
	t.literal('ox'),
	t.literal('nh3'),
	t.literal('nmhc'),
	t.literal('no'),
	t.literal('nox'),
	t.literal('no2'),
	t.literal('o3'),
	t.literal('pm10'),
	t.literal('pm25'),
	t.literal('so2'),
	t.literal('trs'),
]);

/**
 * @ignore
 */
export const unitCodec = t.union([
	t.literal(ppb),
	t.literal(ppm),
	t.literal(ugm3),
]);

/**
 * @ignore
 */
export const entityCodec = t.union([
	t.literal('community'),
	t.literal('government'),
	t.literal('research'),
	t.literal('other'),
]);

/**
 * Required fields for OpenAQ data format.
 *
 * This is empirical! It is gathered from looking at multiple endpoints.
 * @see https://github.com/openaq/openaq-data-format
 */
const OpenAQCodecRequired = t.type({
	country: t.string,
	date: t.type({
		local: t.string,
		utc: t.string,
	}),
	location: t.string,
	parameter: pollutantCodec,
	value: t.number,
	unit: unitCodec,
});

/**
 * Optional fields for OpenAQ data format
 *
 * This is empirical! It is gathered from looking at multiple endpoints.
 * @see https://github.com/openaq/openaq-data-format
 * @ignore
 */
export const OpenAQCodecOptional = t.partial({
	attribution: attributionsCodec,
	averagingPeriod: t.type({
		unit: t.string,
		value: t.union([t.number, t.null]),
	}),
	city: t.union([t.string, t.null]),
	coordinates: latLngCodec,
	entity: entityCodec,
	isAnalysis: t.boolean,
	isMobile: t.boolean,
	sourceName: t.string,
});

/**
 * An io-ts codec to validate the v2 OpenAQ data format.
 *
 * This is empirical! It is gathered from looking at multiple endpoints.
 * @see https://github.com/openaq/openaq-data-format
 */
export const OpenAQCodec = t.intersection([
	OpenAQCodecRequired,
	OpenAQCodecOptional,
]);

/**
 * A TypeScript type to represent the OpenAQ data format.
 *
 * This is empirical! It is gathered from looking at multiple endpoints.
 * @see https://github.com/openaq/openaq-data-format
 */
export type OpenAQResult = t.TypeOf<typeof OpenAQCodec>;

/**
 * OpenAQ Error format.
 *
 * @see https://docs.openaq.org/#
 * @ignore
 */
const OpenAQErrorObjectCodec = t.type({
	detail: t.array(
		t.type({
			loc: t.array(t.string),
			msg: t.string,
			type: t.string,
		})
	),
});

/**
 * An io-ts codec to validate the v2 OpenAQ error format.
 */
export const OpenAQErrorCodec = t.union([OpenAQErrorObjectCodec, t.string]); // We sometimes also get string.

/**
 * @ignore
 */
export type OpenAQErrorObject = t.TypeOf<typeof OpenAQErrorObjectCodec>;

/**
 * Type of the v2 OpenAQ error format.
 */
export type OpenAQError = t.TypeOf<typeof OpenAQErrorCodec>;
