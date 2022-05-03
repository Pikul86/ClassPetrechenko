// Задача на рекурсию
function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

    // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    return n ? n * factorial(n - 1) : 1;
}

factorial(5);

/* 
Моё решение

function factorial(num) {
    let result = num;
    if (Number.isInteger(num) === false || typeof(num) !== 'number') {
        result = 'Введите правильное число';
    } else if(num <= 0) {
        result =  1;
    } else {
        for(let i = 1; i < num; i++) {
            result *= (num - i);    
        }
    }
    return result;
}


console.log(factorial(4));
*/