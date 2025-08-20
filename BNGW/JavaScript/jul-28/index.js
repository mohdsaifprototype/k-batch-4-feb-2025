/* 
Topic: conditional statement

Syntax:
if (codition) {
  Statements...
}
*/
// Program to check if a person is eligible to vote?

// let usrAge = 18;

// if (usrAge >= 18) {
//   console.log("You are eligible to vote!");
// }
// else {
//   console.log("You are ineligible to vote");
// }

// Write a program to check if a no. is even?
// let num = 0;
// if (num % 2 == 0) {
//   console.log("number is even");
// } else {
//   console.log("number is odd");
// }

/* 
Topic: if, else if, else ladder.
*/
// Write a program to check if a no. is even, odd, zero.
// let num = 12;
// if (num == 0) {
//   console.log("No. is zero");
// } else if (num % 2 == 0) {
//   console.log("Even number!");
// } else {
//   console.log("Odd number!");
// }

/*
  Write a program to do the following
  1. If the no. is even print it's half value
  2. If the no. is odd print it's double value
  3. If it's zero print '0'
  4. If the value is -ve print it's absolute value
*/
let num = 0;
if (num == 0) {
	console.log("The number is zero: ZERO ");
} else if (num < 0) {
	console.log("This number is negative and u trick me", num * -1);
} else if (num % 2 == 0) {
	console.log("The number is  even", num / 2);
} else {
	console.log("The number is odd:", num * 2);
}

/* 
  Write a program to do the check if a no. is
  1. even print it's half value
  2. odd print it's double value
  3. zero print '0'
  4. -ve print it's absolute value
*/
