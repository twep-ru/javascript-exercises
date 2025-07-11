const values = require('./joinStrings')

describe('шаг 2', () => {
  test('firstName — Карлос', () => {
    expect(values.firstName).toEqual('Carlos');
  });
  test.skip('lastName — Стивенсон', () => {
    expect(values.lastName).toEqual('Stevenson');
  });
  test.skip('thisYear — 1965', () => {
    expect(values.thisYear).toEqual(1965);
  });
  test.skip('birthYear — 1947', () => {
    expect(values.birthYear).toEqual(1947);
  });
  test.skip('greeting корректно выводится', () => {
    expect(values.greeting).toEqual('Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
});

describe('шаг 3', () => {
  test.skip('fullName — Карлос Стивенсон', () => {
    expect(values.fullName).toEqual('Carlos Stevenson');
  });
  test.skip('age — 18', () => {
    expect(values.age).toEqual(18);
  });
});
