import * as aqiCodes from '../aqi';
import { convert } from '../convert';
import { AqiCode } from '../types';
import { Pollutant } from './pollutant';

/**
 * Small utility function to step AQI/raw conversions for a pollutant
 */
export function testConvert(
  aqiCode: AqiCode,
  pollutant: Pollutant,
  aqi: number,
  raw: number
): void {
  it(`should convert ${aqiCodes[aqiCode].displayName} ${aqi} to ${raw}ug/m3`, () => {
    // Sometimes, because of rounding, the values are not exact. We just want
    // them to be exact at +/-0.2
    expect(
      Math.abs(convert(aqiCode, 'raw', pollutant, aqi) - raw)
    ).toBeLessThanOrEqual(0.2);
    expect(
      Math.abs(convert('raw', aqiCode, pollutant, raw) - aqi)
    ).toBeLessThanOrEqual(0.2);
  });
}
