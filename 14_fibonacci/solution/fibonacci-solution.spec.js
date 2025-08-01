const fibonacci = require('./fibonacci-solution')

describe('fibonacci', () => {
  test('4-е число Фибоначчи равно 3', () => {
    expect(fibonacci(4)).toBe(3);
  });
  test('6-е число Фибоначчи равно 8', () => {
    expect(fibonacci(6)).toBe(8);
  });
  test('10-е число Фибоначчи равно 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
  test('15-е число Фибоначчи равно 610', () => {
    expect(fibonacci(15)).toBe(610);
  });
  test('25-е число Фибоначчи равно 75025', () => {
    expect(fibonacci(25)).toBe(75025);
  });
  test('0-е число Фибоначчи равно 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test('не принимает отрицательные числа', () => {
    expect(fibonacci(-25)).toBe("OOPS");
  });
  test('ПРИНИМАЕТ строки', () => {
    expect(fibonacci("0")).toBe(0);
  });
  test('ПРИНИМАЕТ строки', () => {
    expect(fibonacci("1")).toBe(1);
  });
  test('ПРИНИМАЕТ строки', () => {
    expect(fibonacci("2")).toBe(1);
  });
  test('ПРИНИМАЕТ строки', () => {
    expect(fibonacci("8")).toBe(21);
  });
});