const palindromes = function (string) {
  // Поскольку мы рассматриваем только буквы и цифры, создаем переменную, содержащую все допустимые символы
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Преобразуем в нижний регистр, разбиваем на массив отдельных символов, фильтруем только допустимые символы, затем объединяем в новую строку
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Создаем новую перевернутую строку для сравнения
  const reversedString = cleanedString.split('').reverse().join('');

  // Возвращаем результат сравнения, который будет либо true, либо false
  return cleanedString === reversedString;
};

module.exports = palindromes;
