const values = require('./joinStrings-example')

describe('пример объединения строк', () => {
  test('birthYear — это 1947', () => {
    expect(values.birthYear).toEqual(1947);
  });
  test('thisYear — это 1965', () => {
    expect(values.thisYear).toEqual(1965);
  });
  test('firstName — это Carlos', () => {
    expect(values.firstName).toEqual('Carlos');
  });
  test('lastName — это Stevenson', () => {
    expect(values.lastName).toEqual('Stevenson');
  });
  test('greeting собран корректно', () => {
    expect(values.greeting).toEqual('Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
});
