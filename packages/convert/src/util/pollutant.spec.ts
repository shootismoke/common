import { getMetadata, isPollutant, ugm3 } from './pollutant';

describe('isPollutant', () => {
  it('should return true for pm25', () => {
    expect(isPollutant('pm25')).toBe(true);
  });

  it('should return false for foo', () => {
    expect(isPollutant('foo')).toBe(false);
  });
});

describe('getMetadata', () => {
  it('should return correct metadata', () => {
    expect(getMetadata('pm25')).toEqual({
      code: 'pm25',
      displayName: 'PM25',
      fullName: 'Fine particulate matter (<2.5µm)',
      unit: ugm3
    });
  });
});
