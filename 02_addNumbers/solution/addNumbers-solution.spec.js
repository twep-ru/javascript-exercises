const addNumbers = require('./addNumbers-solution')

describe('addNumbers', () => {
  test('суммирует числа вместе', () => {
    expect(addNumbers()).toEqual(2);
  });
});
