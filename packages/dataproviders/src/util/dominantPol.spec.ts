import { dominantPol } from './dominantPol';
import { Normalized } from '../types';
import { OpenAQFormat } from './openaq';

describe('dominantPol', () => {
  it('should calculate the dominant pollutant', () => {
    const normalized = [
      { parameter: 'pm25', value: 10 } as OpenAQFormat,
      { parameter: 'pm10', value: 20 } as OpenAQFormat
    ] as Normalized;

    expect(dominantPol(normalized)).toBe('pm10');
  });
});
