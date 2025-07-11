const sumAll = require('./sumAll-solution');

describe('sumAll', () => {
  test('суммирует числа в диапазоне', () => {
    expect(sumAll(2, 4)).toEqual(9);
  });
  test.skip('работает с большими числами', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  test.skip('работает, если большее число передано первым', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  test.skip('возвращает ERROR для отрицательных чисел', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  test.skip('возвращает ERROR для нецелых параметров', () => {
    expect(sumAll(2.5, 4)).toEqual('ERROR');
  });
  test.skip('возвращает ERROR для нечисловых параметров', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  test.skip('возвращает ERROR для нечисловых параметров', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});
