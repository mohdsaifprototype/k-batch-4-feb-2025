/* named Function */
// function sum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// let output = sum(5, 6);
// console.log(output);

/* Coping a function */
// let action = sum;
// console.log(action(4, 5));

/* Function expression */
// let mul = function(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// console.log(mul(4, 5));

/* Arrow function */
// let square = (num) => {
//   let result = num * num;
//   return result;
// }

// let square = (num) => {
//   return num * num;
// }

// let square = num => num * num;
// console.log(square(9));


// Immediately Invoked Function Expression (IIFE)
/* 
(function () {
  statements...
})();
*/

(function () {
  let a = 4;
  let b = 6;
  let c = sum(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();