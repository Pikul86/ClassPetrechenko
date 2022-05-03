// debugger
// function createCounter () {
//     let counter = 0;debugger
//     debugger
//     const myFunction = function () {
//         counter = counter + 1;
//         return counter;
//     };

//     return myFunction;
// }
// debugger
// const increment = createCounter();
// const c1 = increment();debugger
// const c2 = increment();debugger
// const c3 = increment();debugger

// console.log(increment, c1, c2, c3);
debugger
let c = 4 
function addX(x) { debugger
  return function(n) { debugger
     return n + x
  }
}
const addThree = addX(3); debugger
let d = addThree(c); debugger
console.log('example partial application', d)