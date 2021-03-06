import { AllPollutants, AllUnits, Pollutant, Unit } from '@shootismoke/convert';
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
export const pollutantCodec = t.union(
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore We're sure there's at list one element.
	AllPollutants.map((pol) => t.literal(pol))
);

/**
 * @ignores
 */
export const unitCodec = t.union(
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore We're sure there's at list one element.
	AllUnits.map((u) => t.literal(u))
);

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

type OpenAQResultBase = t.TypeOf<typeof OpenAQCodec>;

/**
 * A TypeScript type to represent the OpenAQ data format.
 *
 * This is empirical! It is gathered from looking at multiple endpoints.
 * @see https://github.com/openaq/openaq-data-format
 *
 *
 */
export interface OpenAQResult extends OpenAQResultBase {
	parameter: Pollutant; // These two fields are not statically inferred by TS. So we hardcode them.
	unit: Unit;
}

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
