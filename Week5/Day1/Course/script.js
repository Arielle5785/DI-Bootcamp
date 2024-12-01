// Using arrow function and ternary operator create a calculator that returns the result of the calculus depending on the operator : +, - , * ,

// The function should be able to to take 2 numbers as parameters

// const calculator = (x, y, operator) =>
//     operator === '+' ?
//         x + y
//         : operator === '-' ?
//             x - y
//             : operator === '*' ?
//                 x * y
//                 : operator === '/' ?
//                     (y !== 0 ? x / y : 'Error: division by zero') :
//                     'Invalid';
    

// calculator(2,3,'*')
// function addSquares(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }

// a = addSquares(2, 3); // returns 13
// b = addSquares(3, 4); // returns 25
// c = addSquares(4, 5); // returns 41
// function add() {
//   let counter = 0;
//   function plus() {
//       counter += 1;
//       console.log(counter) ;
//   }
//   plus();  
// }

// add()
let add = (function () {
  let counter = 0;
  function calculus() {
      counter += 1; 
      return counter
  }
  return calculus
})();

console.log(add());//1
console.log(add());//2
console.log(add());//3
console.log(add()());//1
console.log(add()());//1
console.log(add()());//1 