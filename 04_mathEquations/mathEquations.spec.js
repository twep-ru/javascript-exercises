const {a, b, c, d, e, f} = require('./mathEquations')

describe('math', () => {
  test('a это 0', () => {
    expect(a).toEqual(0);
  });
  test.skip('b это 9', () => {
    expect(b).toEqual(9);
  });
  test.skip('c это 66', () => {
    expect(c).toEqual(66);
  });
  test.skip('d это 1', () => {
    expect(d).toEqual(1);
  });
  test.skip('e это -8', () => {
    expect(e).toEqual(-8);
  });
  test.skip('f это 68', () => {
    expect(f).toEqual(68);
  });
});
