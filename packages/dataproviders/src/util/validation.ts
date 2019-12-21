import * as t from 'io-ts';

export const attributionsCodec = t.array(
  t.type({
    name: t.string,
    url: t.union([t.string, t.undefined])
  })
);

export const latLngCodec = t.type({
  latitude: t.number,
  longitude: t.number
});

export const pollutantCodec = t.union([
  // Instead of rewriting these, can we use the types and array defined in
  // import { AllPollutants, Pollutant } from '@shootismoke/convert';
  t.literal('co'),
  t.literal('c6h6'),
  t.literal('ox'),
  t.literal('nh3'),
  t.literal('nmhc'),
  t.literal('no'),
  t.literal('nox'),
  t.literal('no2'),
  t.literal('o3'),
  t.literal('pm10'),
  t.literal('pm25'),
  t.literal('so2'),
  t.literal('trs')
]);

export const unitCodec = t.union([
  t.literal('ppb'),
  t.literal('ppm'),
  t.literal('µg/m³')
]);

export const sourceTypeCodec = t.union([
  t.literal('government'),
  t.literal('research'),
  t.literal('other')
]);
