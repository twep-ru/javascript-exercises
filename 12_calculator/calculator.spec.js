const calculator = require('./calculator');

describe('сложение', () => {
  test('складывает 0 и 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test.skip('складывает 2 и 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test.skip('складывает положительные числа', () => {
    expect(calculator.add(2, 6)).toBe(8);
  });
});

describe('вычитание', () => {
  test.skip('вычитает числа', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test.skip('вычитает отрицательные числа', () => {
    expect(calculator.subtract(-10, -4)).toBe(-6);
  });

  test.skip('вычитает числа разной четности', () => {
    expect(calculator.subtract(-8, 7)).toBe(-15);
  });
});

describe('сумма', () => {
  test.skip('вычисляет сумму пустого массива', () => {
    expect(calculator.sum([])).toBe(0);
  });

  test.skip('вычисляет сумму массива из одного числа', () => {
    expect(calculator.sum([7])).toBe(7);
  });

  test.skip('вычисляет сумму массива из двух чисел', () => {
    expect(calculator.sum([7, 11])).toBe(18);
  });

  test.skip('вычисляет сумму массива из многих чисел', () => {
    expect(calculator.sum([1, 3, 5, 7, 9])).toBe(25);
  });
});

describe('умножение', () => {
  test.skip('умножает два числа', () => {
    expect(calculator.multiply([2, 4])).toBe(8);
  });

  test.skip('умножает несколько чисел', () => {
    expect(calculator.multiply([2, 4, 6, 8, 10, 12, 14])).toBe(645120);
  });
});

describe('степень', () => {
  test.skip('возводит одно число в степень другого числа', () => {
    expect(calculator.power(4, 3)).toBe(64); // 4 в третьей степени равно 64
  });

  test.skip('возводит одно число в большую степень', () => {
    expect(calculator.power(3, 10)).toBe(59049); // 3 в десятой степени равно 59049
  });
});

describe('факториал', () => {
  test.skip('вычисляет факториал 0', () => {
    expect(calculator.factorial(0)).toBe(1); // 0! = 1
  });

  test.skip('вычисляет факториал 1', () => {
    expect(calculator.factorial(1)).toBe(1);
  });

  test.skip('вычисляет факториал 2', () => {
    expect(calculator.factorial(2)).toBe(2);
  });

  test.skip('вычисляет факториал 5', () => {
    expect(calculator.factorial(5)).toBe(120);
  });

  test.skip('вычисляет факториал 10', () => {
    expect(calculator.factorial(10)).toBe(3628800);
  });
});
