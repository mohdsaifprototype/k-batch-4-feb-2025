// let from = "Ann";
// function showMessage(from, text) {

//   from = '*' + from + '*'; // make "from" look nicer

//   console.log( from + ': ' + text );
// }

// showMessage(from, "Hello"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// console.log( from ); // Ann

let myFunction = function(name="user") {
  return `Welcome ${name}, you will learn JS functions!`;
}

console.log(myFunction("Ravi"));
console.log(myFunction());