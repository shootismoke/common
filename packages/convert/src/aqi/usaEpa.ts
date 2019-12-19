import { Aqi } from '../types';
import { Breakpoints, fromRaw, getRange, toRaw } from '../util';

// Pollutants tracked
const pollutants = ['co', 'no2', 'o3', 'pm10', 'pm25', 'so2'] as const;
type Pollutant = typeof pollutants[number];

const breakpoints: Record<Pollutant, Breakpoints> = {
  co: [], // TODO
  no2: [], // TODO
  o3: [], // TODO
  pm10: [], // TODO
  pm25: [
    [
      [0, 50],
      [0, 12]
    ],
    [
      [51, 100],
      [12.1, 35.4]
    ],
    [
      [101, 150],
      [35.5, 55.4]
    ],
    [
      [151, 200],
      [55.5, 150.4]
    ],
    [
      [201, 300],
      [150.5, 250.4]
    ],
    [
      [301, 400],
      [250.5, 350.4]
    ],
    [
      [401, 500],
      [350.5, 500]
    ]
  ],
  so2: [] // TODO
};

function assertTracked(pollutant: Pollutant): asserts pollutant is 'pm25' {
  if (pollutant !== 'pm25') {
    throw new Error(
      'Not implemeted. See https://github.com/shootismoke/common/issues/5.'
    );
  }
}

/**
 * AQI (US)
 * @see https://www3.epa.gov/airnow/aqi-technical-assistance-document-sept2018.pdf
 */
export const usaEpa: Aqi<Pollutant> = {
  displayName: 'AQI (US)',
  fromRaw(raw: number, pollutant: Pollutant) {
    assertTracked(pollutant);

    return fromRaw(raw, breakpoints[pollutant]);
  },
  pollutants: Object.keys(breakpoints) as Pollutant[],
  range(pollutant: Pollutant) {
    assertTracked(pollutant);

    return getRange(breakpoints[pollutant]);
  },
  toRaw(value: number, pollutant: Pollutant) {
    assertTracked(pollutant);

    return toRaw(value, breakpoints[pollutant]);
  }
};
