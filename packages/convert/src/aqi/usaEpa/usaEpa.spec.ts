import { convert } from '../../convert';
import { testConvert } from '../../util/testUtil';
import { usaEpa } from './usaEpa';

describe('Convert pm25', () => {
  testConvert('usaEpa', 'pm25', 25, 6);
  testConvert('usaEpa', 'pm25', 39, 9.35);
  testConvert('usaEpa', 'pm25', 57, 15);
  testConvert('usaEpa', 'pm25', 75, 23.5);
  testConvert('usaEpa', 'pm25', 125, 45.2);
  testConvert('usaEpa', 'pm25', 175, 102);
  testConvert('usaEpa', 'pm25', 250, 199.9);
  testConvert('usaEpa', 'pm25', 285, 235.4);
  testConvert('usaEpa', 'pm25', 350, 299.9);
  testConvert('usaEpa', 'pm25', 450, 424.5);
  testConvert('usaEpa', 'pm25', 550, 550);

  it('should convert AQI (US) to AQI (CN)', () => {
    expect(convert('pm25', 'usaEpa', 'chnMep', 24)).toBe(8.3);
  });

  it('should throw an error on unknown pollutant', () => {
    expect(() => convert('nmhc', 'usaEpa', 'raw', 23)).toThrowError(
      'AQI (US) does not apply to pollutant nmhc'
    );
  });

  it('should return the correct range', () => {
    expect(usaEpa.range).toEqual([0, 500]);
  });
});
