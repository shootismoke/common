import { Pollutant } from '@shootismoke/convert';
import type { AxiosError } from 'axios';
import * as TE from 'fp-ts/lib/TaskEither';

import { LatLng } from '../../types';
import {
	ACCURATE_RADIUS,
	fetchAndDecode,
	OpenAQError,
	OpenAQErrorObject,
} from '../../util';
import { OpenAQMeasurements, OpenAQMeasurementsCodec } from './validation';

const RESULT_LIMIT = 10;
const OPENAQ_MEASUREMENTS_V2 = `https://api.openaq.org/v2/measurements`;

/**
 * @see https://docs.openaq.org/#api-Latest
 */
export interface OpenAQOptions {
	/**
	 * Show results after a certain date. This acts on the utc timestamp of each
	 * measurement.
	 */
	dateFrom?: Date;
	/**
	 * Show results before a certain date. This acts on the utc timestamp of each measurement.
	 */
	dateTo?: Date;
	/**
	 * Include extra fields in the output in addition to default values.
	 */
	includeFields?: string[];
	/**
	 * Change the number of results returned, max is 10000.
	 * @default 10
	 */
	limit?: number;
	/**
	 * Limit to certain one or more parameters.
	 */
	parameter?: Pollutant[];
}

function additionalOptions(options: OpenAQOptions = {}): string {
	let query = '';

	// dateFrom
	if (options.dateFrom) {
		query += `&date_from=${options.dateFrom.toISOString()}`;
	}

	// dateTo
	if (options.dateTo) {
		query += `&date_to=${options.dateTo.toISOString()}`;
	}

	// includeFields
	// We add attribution by default
	query += `&include_fields=${(options.includeFields || ['attribution']).join(
		','
	)}`;

	// limit
	query += `&limit=${options.limit || RESULT_LIMIT}`;

	// parameter
	query += (options.parameter || []).map((p) => `&parameter[]=${p}`).join('');

	return query;
}

/**
 * Handle error from OpenAQ response
 */
function onError(err: AxiosError<OpenAQError>): Error {
	// We had occasions from OpenAQ where the error had an empty response field
	// so we check that the data is populated first.
	if (err?.response?.data) {
		const e = err.response.data as OpenAQErrorObject;

		if (e.detail) {
			return new Error(
				e.detail.map((err) => JSON.stringify(err)).join(', ')
			);
		} else {
			return new Error(err.response.data as string);
		}
	}

	return new Error(JSON.stringify(err));
}

/**
 * Fetch the closest station to the user's current position
 *
 * @param gps - Latitude and longitude of the user's current position
 */
export function fetchByGps(
	gps: LatLng,
	options?: OpenAQOptions
): TE.TaskEither<Error, OpenAQMeasurements> {
	const { latitude, longitude } = gps;

	return fetchAndDecode(
		`${OPENAQ_MEASUREMENTS_V2}?coordinates=${latitude},${longitude}&radius=${ACCURATE_RADIUS}${additionalOptions(
			options
		)}`,
		OpenAQMeasurementsCodec,
		{
			onError,
		}
	);
}

/**
 * Fetch data by station
 *
 * @param stationId - The station ID to search
 */
export function fetchByStation(
	stationId: string,
	options?: OpenAQOptions
): TE.TaskEither<Error, OpenAQMeasurements> {
	return fetchAndDecode(
		`${OPENAQ_MEASUREMENTS_V2}?location=${stationId}${additionalOptions(
			options
		)}`,
		OpenAQMeasurementsCodec,
		{
			onError,
		}
	);
}
