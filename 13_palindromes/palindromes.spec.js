const palindromes = require('./palindromes')

describe('palindromes', () => {
  test('работает с отдельными словами', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test.skip('работает с пунктуацией', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test.skip('работает с заглавными буквами', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test.skip('работает с несколькими словами', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test.skip('работает с несколькими словами', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test.skip('не всегда возвращает true', () => {
    expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test.skip('работает с цифрами в строке', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
  test.skip('работает с неравномерно расположенными цифрами в строке', () => {
    expect(palindromes('r3ace3car')).toBe(false);
  });
});
