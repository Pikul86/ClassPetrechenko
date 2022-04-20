let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}
console.log(result);

// *
// **
// ***
// ****
// *****
// ******


// // Циклы с метками, ссылка на документацию https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/label
// let str = '';

// loop1:
// for (let i = 0; i < 5; i++) {
//   if (i === 1) {
//     continue loop1;
//   }
//   str = str + i;
// }

// console.log(str);
// // expected output: "0234"


// Ёлочка
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);
// //   *
//     ***
//    *****
//   *******
//  *********
// ***********
