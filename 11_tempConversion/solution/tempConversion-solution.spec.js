const {
  convertToCelsius,
  convertToFahrenheit,
} = require('./tempConversion-solution');

describe('convertToCelsius', () => {
  test('работает', () => {
    expect(convertToCelsius(32)).toEqual(0);
  });
  test.skip('округляет до 1 знака после запятой', () => {
    expect(convertToCelsius(100)).toEqual(37.8);
  });
  test.skip('работает с отрицательными значениями', () => {
    expect(convertToCelsius(-100)).toEqual(-73.3);
  });
});

describe('convertToFahrenheit', () => {
  test.skip('работает', () => {
    expect(convertToFahrenheit(0)).toEqual(32);
  });
  test.skip('округляет до 1 знака после запятой', () => {
    expect(convertToFahrenheit(73.2)).toEqual(163.8);
  });
  test.skip('работает с отрицательными значениями', () => {
    expect(convertToFahrenheit(-10)).toEqual(14);
  });
});
