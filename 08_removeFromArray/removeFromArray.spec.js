const removeFromArray = require('./removeFromArray')

describe('removeFromArray', () => {
  test('удаляет одно значение', () => {
    expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test.skip('удаляет несколько значений', () => {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  test.skip('удаляет несколько одинаковых значений', () => {
    expect(removeFromArray([1, 2, 2, 3], 2)).toEqual([1, 3]);
  });
  test.skip('игнорирует отсутствующие значения', () => {
    expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  test.skip('игнорирует отсутствующие значения, но всё равно работает', () => {
    expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  test.skip('может удалить все значения', () => {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  test.skip('работает со строками', () => {
    expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
  test.skip('удаляет только значения того же типа', () => {
    expect(removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);
  });
});
