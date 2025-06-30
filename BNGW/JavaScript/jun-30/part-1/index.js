/* 
Topic: JavaScript Functions

Q&A:
Q What's a function?
A A function is a block of code that we can use multiple times without making the code redundant.
*/

/* function sum() {
  let a = +prompt("Enter the value of a");
  let b = +prompt("Enter the value of b");

  alert("The sum is " + (a + b));
}

sum();
sum();
sum();
sum(); */

/* Working of functions */

/* 1st we declare the function */
function greet(param1) {
  console.log("Hello", param1);
}

/* then we call the function */
greet("Saif");
greet("Ankush");
greet("Punit");
greet("Ravi");
greet("Rohan");
greet("Aman");
