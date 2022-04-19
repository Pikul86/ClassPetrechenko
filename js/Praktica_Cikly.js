//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 
// Решение:
// let result = 4;
// const length = 11;

// for (let i = 5; i < length; i++) {
//     console.log(result += 1);
// }


// порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// Решение:
// let result = 21;
// for (let i = 0; i <= 10; i++) {
//     result -= 1;
//     if (result === 13) {
//         break;
//     }
//     console.log(result);
// }

// выведите чётные числа от 2 до 10 
// Решение:
// let result = 1;
// for (let i = 1; i <= 10; i++) {
//     result += 1;
//     if (result % 2 === 0) {
//         console.log(result);
//     }
//     continue;
// }

//Перепишите цикл for  на вариант с while . Результат должен остаться точно таким же. 
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.
//  for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// Решение:
// let i = 1;
// while (i < 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
//     }





//Заполните массив цифрами от 5 до 10 включительно. 
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
 