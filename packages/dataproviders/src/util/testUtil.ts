import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { LatLng, Normalized, Provider } from '../types';

export interface TestProviderOptions<Options> {
  options?: Options;
  skip?: ('fetchByGps' | 'fetchByStation')[];
}

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
    expect(data.date).toBeDefined();
    expect(data.location).toBeDefined();
    expect(data.parameter).toBeDefined();
    expect(data.value).toBeDefined();
    expect(data.unit).toBeDefined();
  });
}

function testTE<T>(
  te: TE.TaskEither<Error, T>,
  normalize: (data: T) => Normalized,
  done: jest.DoneCallback
): void {
  pipe(
    te,
    TE.fold(
      error => {
        if (
          // Skip if the random stationId is an unknown station
          error.message.includes('Unknown ID') ||
          // Skip if we somehow couldn't connect
          error.message.includes('can not connect')
        ) {
          done();

          return T.of(void undefined);
        }
        done.fail(error);

        return T.of(void undefined);
      },
      response => {
        expect(response).toBeDefined();

        const normalized = normalize(response);
        testNormalized(normalized);

        done();

        return T.of(void undefined);
      }
    )
  )();
}

/**
 * Test helper to test a provider
 */
export function testProvider<DataByGps, DataByStation, Options = {}>(
  provider: Provider<DataByGps, DataByStation, Options>,
  { options, skip = [] }: TestProviderOptions<Options>
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
