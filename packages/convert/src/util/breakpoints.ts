import { Aqi } from '../types';
import { Pollutant } from './pollutant';

/**
 * Round a number to closest 0.1
 *
 * @param n - The float number to round
 */
function roundTo1Decimal(n: number): number {
  return Math.round(10 * n) / 10;
}

type Piecewise = [number, number][];

/**
 * Piecewise breakpoints that define an AQI
 */
export type Breakpoints = Partial<Record<Pollutant | 'aqi', Piecewise>>;

/**
 * From the breakpoints, we can derive the range (i.e. [min,max]) values of the
 * AQI.
 *
 * @param breakpoints - The breakpoints to calculate the range from
 */
function getRange(breakpoints: Piecewise): [number, number] {
  return [breakpoints[0][0], breakpoints[breakpoints.length - 1][1]];
}

/**
 * Convert an AQI to raw concentration using breakpoints
 *
 * @param value - AQI value to convert
 * @param breakpoints - Breakpoints defining the AQI
 */
function toRaw(
  aqiPiecewise: Piecewise,
  rawPiecewise: Piecewise,
  value: number
): number {
  // Find the segment in which the `aqi` is
  const segment = aqiPiecewise.findIndex(
    ([aqiLow, aqiHigh]) => aqiLow <= value && value <= aqiHigh
  );

  if (!segment) {
    // For PM2.5 greater than 500, AQI is not officially defined, but since
    // such levels have been occurring throughout China in recent years, one of
    // two conventions is used. Either the AQI is defined as equal to PM2.5 (in
    // micrograms per cubic meter) or the AQI is simply set at 500.
    // We take the 1st convention here.
    // We also do the same for other pollutants
    return value;
  }

  const [aqiLow, aqiHigh] = aqiPiecewise[segment];
  const [rawLow, rawHigh] = rawPiecewise[segment];

  // Use 1 decimal place
  return roundTo1Decimal(
    ((value - aqiLow) / (aqiHigh - aqiLow)) * (rawHigh - rawLow) + rawLow
  );
}

/**
 * Convert raw concentration to AQI using breakpoints
 *
 * @param raw - The raw value to convert
 * @param breakpoints - Breakpoints defining the AQI
 */
function fromRaw(
  aqiPiecewise: Piecewise,
  rawPiecewise: Piecewise,
  raw: number
): number {
  // Find the segment in which the `aqi` is
  const segment = rawPiecewise.findIndex(
    ([rawLow, rawHigh]) => rawLow <= raw && raw <= rawHigh
  );

  if (typeof segment === 'undefined') {
    // For PM2.5 greater than 500, AQI is not officially defined, but since
    // such levels have been occurring throughout China in recent years, one of
    // two conventions is used. Either the AQI is defined as equal to PM2.5 (in
    // micrograms per cubic meter) or the AQI is simply set at 500.
    // We take the 1st convention here.
    // We also do the same for other pollutants
    return raw;
  }

  const [aqiLow, aqiHigh] = aqiPiecewise[segment];
  const [rawLow, rawHigh] = rawPiecewise[segment];

  // Use 1 decimal place
  return roundTo1Decimal(
    ((raw - rawLow) / (rawHigh - rawLow)) * (aqiHigh - aqiLow) + aqiLow
  );
}

function assertTracked<P extends Pollutant>(
  aqiCode: string,
  pollutant: Pollutant,
  breakpoints: Breakpoints
): asserts breakpoints is Record<P | 'aqi', Piecewise> {
  if (!breakpoints.aqi) {
    throw new Error(`${aqiCode} does not have AQI breakpoints`);
  }
  if (!breakpoints[pollutant]) {
    throw new Error(`${aqiCode} does not apply to ${pollutant}`);
  }
}

export function createAqiFromBreakpoints(
  aqiCode: string,
  breakpoints: Breakpoints
): Omit<Aqi, 'displayName'> {
  return {
    pollutants: Object.keys(breakpoints) as Pollutant[],
    fromRaw(pollutant: Pollutant, raw: number): number {
      assertTracked(aqiCode, pollutant, breakpoints);

      return fromRaw(breakpoints.aqi, breakpoints[pollutant], raw);
    },
    range(pollutant: Pollutant): [number, number] {
      assertTracked(aqiCode, pollutant, breakpoints);

      return getRange(breakpoints[pollutant]);
    },
    toRaw(pollutant: Pollutant, value: number): number {
      assertTracked(aqiCode, pollutant, breakpoints);

      return toRaw(breakpoints.aqi, breakpoints[pollutant], value);
    }
  };
}
