import { Breakpoints, fromRaw, getRange, toRaw } from '../util';
import { Aqi } from '../types';

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
 * AQI (CN)
 * @see https://kjs.mep.gov.cn/hjbhbz/bzwb/dqhjbh/jcgfffbz/201203/t20120302_224166.htm
 */
export const chnMep: Aqi<Pollutant> = {
  displayName: 'AQI (CN)',
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
