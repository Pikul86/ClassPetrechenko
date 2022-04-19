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


// Циклы с метками, ссылка на документацию https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/label
let str = '';

loop1:
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// expected output: "0234"