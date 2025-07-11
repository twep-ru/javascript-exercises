const numberChecker = require('./numberChecker-solution')

describe('numberChecker', () => {
  test('возвращает true, когда число 1000', () => {
    expect(numberChecker(1000)).toEqual(true);
  });
  test.skip('возвращает true, когда число 10', () => {
    expect(numberChecker(10)).toEqual(true);
  });
  test.skip('возвращает false, когда число 9', () => {
    expect(numberChecker(9)).toEqual(false);
  });
  test.skip('возвращает false, когда число 6', () => {
    expect(numberChecker(6)).toEqual(false);
  });
});
