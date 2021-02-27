import { getDominantPol } from './getDominantPol';
import { OpenAQResult } from './openaq';
import { OpenAQResults } from '../types';

describe('getDominantPol', () => {
	it('should calculate the dominant pollutant', () => {
		const results = [
			{ parameter: 'pm25', value: 10 } as OpenAQResult,
			{ parameter: 'pm10', value: 20 } as OpenAQResult,
		] as OpenAQResults;

		expect(getDominantPol(results)).toBe('pm10');
	});
});
