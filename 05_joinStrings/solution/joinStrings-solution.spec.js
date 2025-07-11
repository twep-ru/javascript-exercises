const values = require('./joinStrings-solution')

describe('проверка', () => {
  test('firstName — это Carlos', () => {
    expect(values.firstName).toEqual('Carlos');
  });
  test('lastName — это Stevenson', () => {
    expect(values.lastName).toEqual('Stevenson');
  });
  test('thisYear — это 1965', () => {
    expect(values.thisYear).toEqual(1965);
  });
  test('birthYear — это 1947', () => {
    expect(values.birthYear).toEqual(1947);
  });
  test('greeting сформировано правильно', () => {
    expect(values.greeting).toEqual('Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
  test('fullName — это Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Carlos Stevenson');
  });
  test('age — это 18', () => {
    expect(values.age).toEqual(18);
  });
});
