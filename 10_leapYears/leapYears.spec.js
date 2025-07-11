const leapYears = require('./leapYears')

describe('leapYears', () => {
  test('работает с невисокосными годами', () => {
    expect(leapYears(1996)).toBe(true);
  });
  test.skip('работает с невисокосными годами', () => {
    expect(leapYears(1997)).toBe(false);
  });
  test.skip('работает с очень далекими невисокосными годами', () => {
    expect(leapYears(34992)).toBe(true);
  });
  test.skip('работает с високосными годами', () => {
    expect(leapYears(1900)).toBe(false);
  });
  test.skip('работает с високосными годами', () => {
    expect(leapYears(1600)).toBe(true);
  });
  test.skip('работает с високосными годами', () => {
    expect(leapYears(700)).toBe(false);
  });
});
