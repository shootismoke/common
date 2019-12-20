import { Aqi } from '../types';
import {
  assertTracked,
  Breakpoints,
  fromRaw,
  getRange,
  Pollutant,
  toRaw
} from '../util';

// Breakpoints used to define the index
const breakpoints = {
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
  ] as Breakpoints
};

type UsaEpaPollutant = keyof typeof breakpoints;

/**
 * AQI (US)
 * @see https://www3.epa.gov/airnow/aqi-technical-assistance-document-sept2018.pdf
 */
export const usaEpa: Aqi = {
  displayName: 'AQI (US)',
  fromRaw(raw: number, pollutant: Pollutant) {
    assertTracked<UsaEpaPollutant>(pollutant, 'usaEpa');

    return fromRaw(raw, breakpoints[pollutant]);
  },
  pollutants: Object.keys(breakpoints) as Pollutant[],
  range(pollutant: Pollutant) {
    assertTracked<UsaEpaPollutant>(pollutant, 'usaEpa');

    return getRange(breakpoints[pollutant]);
  },
  toRaw(value: number, pollutant: Pollutant) {
    assertTracked<UsaEpaPollutant>(pollutant, 'usaEpa');

    return toRaw(value, breakpoints[pollutant]);
  }
};
