import { Normalized } from '../../types';
import { Measurements } from './validation';

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export function normalize({ results }: Measurements): Normalized {
  return results.map(result => ({
    ...result,
    location: `openaq|${result.location}`
  }));
}
