const {a, b, c, d, e, f} = require('./mathEquations-solution')

describe('math', () => {
  test('a это 0', () => {
    expect(a).toEqual(0);
  });
  test('b это 9', () => {
    expect(b).toEqual(9);
  });
  test('c это 66', () => {
    expect(c).toEqual(66);
  });
  test('d это 1', () => {
    expect(d).toEqual(1);
  });
  test('e это -8', () => {
    expect(e).toEqual(-8);
  });
  test('f это 68', () => {
    expect(f).toEqual(68);
  });
});
