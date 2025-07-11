const repeatString = require('./repeatString-solution');

describe('repeatString', () => {
  test('repeats the string', () => {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  test('repeats the string many times', () => {
    expect(repeatString('hello', 10)).toEqual('hellohellohellohellohellohellohellohellohellohello');
  });
  test('repeats the string 1 times', () => {
    expect(repeatString('hi', 1)).toEqual('hi');
  });
  test('repeats the string 0 times', () => {
    expect(repeatString('bye', 0)).toEqual('');
  });
  test('does not use the built-in String repeat method', () => {
    /* Несмотря на то, что существует встроенный метод String.repeat,
       в этом упражнении мы хотим, чтобы вы попрактиковались в использовании циклов */
    jest.spyOn(String.prototype, 'repeat').mockName('Built-in String repeat method');
    repeatString("don't use the built-in repeat method!", 1);
    expect(String.prototype.repeat).not.toHaveBeenCalled();
  });
  test('returns ERROR with negative numbers', () => {
    expect(repeatString('goodbye', -1)).toEqual('ERROR');
  });
  test('repeats the string a random amount of times', function () {
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
  test('works with blank strings', () => {
    expect(repeatString('', 10)).toEqual('');
  });
});
