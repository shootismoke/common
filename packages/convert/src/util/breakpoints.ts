/**
 * Round a number to closest 0.1
 *
 * @param n - The float number to round
 */
export function roundTo1Decimal(n: number): number {
  return Math.round(10 * n) / 10;
}

/**
 * Breakpoints that define an AQI
 */
export type Breakpoints = [
  [number, number] /* [aqiLow, aqiHigh] */,
  [number, number] /* [rawLow, rawHigh] */
][];

/**
 * From the breakpoints, we can derive the range (i.e. [min,max]) values of the
 * AQI.
 *
 * @param breakpoints - The breakpoints to calculate the range from
 */
export function getRange(breakpoints: Breakpoints): [number, number] {
  return [breakpoints[0][0][0], breakpoints[breakpoints.length - 2][0][1]];
}

/**
 * Convert an AQI to raw concentration using breakpoints
 *
 * @param value - AQI value to convert
 * @param breakpoints - Breakpoints defining the AQI
 */
export function toRaw(value: number, breakpoints: Breakpoints): number {
  // Find the segment in which the `aqi` is
  const segment = breakpoints.find(
    ([[aqiLow, aqiHigh]]) => aqiLow <= value && value <= aqiHigh
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

  const [[aqiLow, aqiHigh], [rawLow, rawHigh]] = segment;

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
export function fromRaw(raw: number, breakpoints: Breakpoints): number {
  // Find the segment in which the `aqi` is
  const segment = breakpoints.find(
    ([[_l, _h], [rawLow, rawHigh]]) => rawLow <= raw && raw <= rawHigh
  );

  if (!segment) {
    // For PM2.5 greater than 500, AQI is not officially defined, but since
    // such levels have been occurring throughout China in recent years, one of
    // two conventions is used. Either the AQI is defined as equal to PM2.5 (in
    // micrograms per cubic meter) or the AQI is simply set at 500.
    // We take the 1st convention here.
    // We also do the same for other pollutants
    return raw;
  }

  const [[aqiLow, aqiHigh], [rawLow, rawHigh]] = segment;

  // Use 1 decimal place
  return roundTo1Decimal(
    ((raw - rawLow) / (rawHigh - rawLow)) * (aqiHigh - aqiLow) + aqiLow
  );
}
