const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // Альтернативный способ поменять местами значения min и max, как показано выше, — использовать синтаксис деструктуризации массива.
  // Вот дополнительная статья на эту тему: https://learn.javascript.ru/destructuring-assignment
  // if (min > max) [min, max] = [max, min];
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
