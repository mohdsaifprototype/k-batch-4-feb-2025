// let from = "Ann";
// function showMessage(from, text) {

//   from = '*' + from + '*'; // make "from" look nicer

//   console.log( from + ': ' + text );
// }

// showMessage(from, "Hello"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// console.log( from ); // Ann

// let myFunction = function(name="user") {
//   return `Welcome ${name}, you will learn JS functions!`;
// }

// console.log(myFunction("Ravi"));
// console.log(myFunction());

// let add = (num1, num2) => {
//   if (!num1) {
//     num1 = 1;
//   }
//   return num1 + num2;
// }
// console.log(add(4, 5));

// function min(a, b) {
//   // if (a > b) {
//   //   return b;
//   // }
//   // return a;
//   return (a > b) ? b : a;
// }

// console.log(min(-140, -50));


function pow(a, b){
  return a ** b;
}

console.log(pow(5, 4));