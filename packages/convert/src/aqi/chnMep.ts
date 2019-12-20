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
      [0, 35]
    ],
    [
      [51, 100],
      [35.1, 75]
    ],
    [
      [101, 150],
      [75, 115]
    ],
    [
      [151, 200],
      [115.1, 150]
    ],
    [
      [201, 300],
      [150.1, 250]
    ],
    [
      [201, 300],
      [250.1, 350]
    ],
    [
      [201, 300],
      [350.1, 500]
    ]
  ] as Breakpoints
};

type ChnMepPollutant = keyof typeof breakpoints;

/**
 * AQI (CN)
 * @see https://kjs.mep.gov.cn/hjbhbz/bzwb/dqhjbh/jcgfffbz/201203/t20120302_224166.htm
 */
export const chnMep: Aqi = {
  displayName: 'AQI (CN)',
  fromRaw(raw: number, pollutant: Pollutant) {
    assertTracked<ChnMepPollutant>(pollutant, 'usaEpa');

    return fromRaw(raw, breakpoints[pollutant]);
  },
  pollutants: Object.keys(breakpoints) as Pollutant[],
  range(pollutant: Pollutant) {
    assertTracked<ChnMepPollutant>(pollutant, 'usaEpa');

    return getRange(breakpoints[pollutant]);
  },
  toRaw(value: number, pollutant: Pollutant) {
    assertTracked<ChnMepPollutant>(pollutant, 'usaEpa');

    return toRaw(value, breakpoints[pollutant]);
  }
};
