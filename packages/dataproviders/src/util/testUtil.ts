import { AllPollutants } from '@shootismoke/convert';
import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { LatLng, Normalized, Provider } from '../types';

function generateRandomLatLng(): LatLng {
  return {
    latitude: Math.floor(Math.random() * 9000) / 100,
    longitude: Math.floor(Math.random() * 9000) / 100
  };
}

function generateRandomStationId(): string {
  return `${Math.floor(Math.random() * 1000) + 1}`;
}

/**
 * Test that normalized data is correct
 *
 * @param normalized - The normalized data to test
 */
export function testNormalized(normalized: Normalized): void {
  normalized.forEach(data => {
    expect(data.country.length).toBe(2);
    expect(data.date).toBeDefined();
    expect(data.location).toHaveProperty('latitude');
    expect(data.location).toHaveProperty('longitude');
    expect(Object.keys(AllPollutants).includes(data.parameter)).toBe(true);
    expect(data.value).toBeDefined();
    expect(data.unit).toBeDefined();
  });
}

function testTE<T>(
  te: TE.TaskEither<Error, T>,
  normalize: (data: T) => E.Either<Error, Normalized>,
  done: jest.DoneCallback
): void {
  pipe(
    te,
    TE.map(response => {
      expect(response).toBeDefined();

      return response;
    }),
    TE.chain(response => TE.fromEither(normalize(response))),
    TE.fold(
      error => {
        if (
          // Skip if the random stationId is an unknown station
          error.message.includes('Unknown ID') ||
          // Skip if we somehow couldn't connect
          error.message.includes('can not connect') ||
          // Skip if openaq doesn't return results
          error.message.startsWith('[openaq] Cannot normalize, no results') ||
          // Skip if aqicn doesn't track pollutants that don't interest us
          error.message.includes('no pollutants currently tracked') ||
          // Skip if aqicn country name is not sanitized
          error.message.startsWith('[aqicn] Cannot get code from country') ||
          // Skip if aqicn doesn't expose city
          error.message.includes('no city') ||
          // Skip if cannot find country for waqi
          error.message.startsWith('[waqi] Cannot get code from country')
        ) {
          done();

          return T.of(void undefined);
        }

        done.fail(error);
        return T.of(void undefined);
      },
      () => {
        done();
        return T.of(void undefined);
      }
    )
  )();
}

interface TestProviderE2EOptions<Options> {
  options?: Options;
  skip?: ('fetchByGps' | 'fetchByStation')[];
}

/**
 * Test helper to test a provider
 */
export function testProviderE2E<DataByGps, DataByStation, Options>(
  provider: Provider<DataByGps, DataByStation, Options>,
  { options, skip = [] }: TestProviderE2EOptions<Options>
): void {
  if (!skip.includes('fetchByGps')) {
    describe('fetchByGps', () => {
      [...Array(2)].map(generateRandomLatLng).forEach(gps => {
        it(`should fetch ${provider.id} by gps: ${JSON.stringify(gps)}`, done =>
          testTE(
            provider.fetchByGps(gps, options),
            d => provider.normalizeByGps(d),
            done
          ));
      });
    });
  }

  if (!skip.includes('fetchByStation')) {
    describe('fetchByStation', () => {
      [...Array(2)].map(generateRandomStationId).forEach(stationId => {
        it(`should fetch ${provider.id} by station: ${stationId}`, done =>
          testTE(
            provider.fetchByStation(stationId, options),
            d => provider.normalizeByStation(d),
            done
          ));
      });
    });
  }
}
