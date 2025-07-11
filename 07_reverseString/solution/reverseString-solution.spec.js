const reverseString = require('./reverseString-solution');

describe('reverseString', () => {
  test('переворачивает одно слово', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test.skip('переворачивает несколько слов', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh');
  });

  test.skip('работает с числами и знаками препинания', () => {
    expect(reverseString('123! abc! Hello, Odinite.')).toEqual(
      '.etinidO ,olleH !cba !321'
    );
  });
  test.skip('работает с пустыми строками', () => {
    expect(reverseString('')).toEqual('');
  });
});
