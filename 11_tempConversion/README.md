# Упражнение 11 - tempConversion

Напишите две функции, которые конвертируют температуру из Фаренгейта в Цельсий и наоборот:
```
convertToCelsius(32) // из фаренгейта в цельсий, должно вернуть 0

convertToFahrenheit(0) // из цельсия в фаренгейт, должно вернуть 32
```

Поскольку мы люди, мы хотим, чтобы результат округлялся до одного знака после запятой: например, `convertToCelsius(100)` должно вернуть `37.8`, а не `37.77777777777778`.

В этом упражнении нужно создать больше одной функции, поэтому секция `module.exports` в основном файле javascript будет выглядеть немного иначе. Не беспокойтесь, мы просто упаковываем обе функции в один объект для экспорта.

## Подсказки
- Соответствующие формулы можно найти на [Википедии](https://ru.wikipedia.org/wiki/Шкала_температур).

- Попробуйте самостоятельно найти в Интернете, как округлить число до 1 знака после запятой в JavaScript. Если возникнут трудности, посмотрите [здесь](https://ru.hexlet.io/qna/javascript/questions/kak-okruglit-chislo-v-javascript).