const addNumbers = require('./addNumbers')

describe('addNumbers', () => {
  test('суммирует числа вместе', () => {
    expect(addNumbers()).toEqual(2);
  });
});
