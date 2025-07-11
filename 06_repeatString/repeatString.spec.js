const repeatString = require('./repeatString')

describe('repeatString', () => {
  test('повторяет строку', () => {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  test.skip('повторяет строку много раз', () => {
    expect(repeatString('hello', 10)).toEqual('hellohellohellohellohellohellohellohellohellohello');
  });
  test.skip('повторяет строку 1 раз', () => {
    expect(repeatString('hi', 1)).toEqual('hi');
  });
  test.skip('повторяет строку 0 раз', () => {
    expect(repeatString('bye', 0)).toEqual('');
  });
  test.skip('не использует встроенный метод String.repeat', () => {
    /* Несмотря на то, что существует встроенный метод String.repeat,
       в этом упражнении мы хотим, чтобы вы попрактиковались в использовании циклов */
    jest.spyOn(String.prototype, 'repeat').mockName('Built-in String repeat method');
    repeatString("don't use the built-in repeat method!", 1);
    expect(String.prototype.repeat).not.toHaveBeenCalled();
  });
  test.skip('возвращает ERROR при отрицательных числах', () => {
    expect(repeatString('goodbye', -1)).toEqual('ERROR');
  });
  test.skip('повторяет строку случайное количество раз', function () {
    /* Число генерируется с помощью Math.random для получения значения от 0 до 1,
       когда оно умножается на 1000 и округляется в меньшую сторону с помощью Math.floor,
       оно становится числом от 0 до 999 (это число будет меняться при каждом запуске теста).

       НЕ используйте Math.floor(Math.random() * 1000) в своем коде,
       этот тест генерирует случайное число, а затем передает его в ваш код через параметр функции.
       Если это непонятно, вам следует прочитать о функциях здесь:
       https://www.twep.ru/odin/js-basics/function-basics/ */
    const number = Math.floor(Math.random() * 1000);
    expect(repeatString('hey', number)).toBe('hey'.repeat(number));
  });
  test.skip('работает с пустыми строками', () => {
    expect(repeatString('', 10)).toEqual('');
  });
});
