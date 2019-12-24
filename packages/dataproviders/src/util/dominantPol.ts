import { Normalized } from '../types';
import { Pollutant } from '@shootismoke/convert';

export function dominantPol(normalized: Normalized): Pollutant {
  return normalized.slice(-1).sort((a, b) => a.value - b.value)[0].parameter;
}
