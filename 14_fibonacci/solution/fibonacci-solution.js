const fibonacci = function(countArg) {
    // проверяет тип аргумента и убеждается, что мы используем 
    // число на протяжении всей остальной части функции.
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};

// Другой способ сделать это - использовать итеративный подход с массивом, содержащим два значения, 0 и 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

module.exports = fibonacci;
