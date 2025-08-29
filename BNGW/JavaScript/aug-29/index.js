/* 
There are some special loops specially made to iterate through array and simple objects.
1. for of loop
2. for in loop
3. foreach loop
*/
let fruits = ["Apple", "Orange", "Plum"];

/* If you want to iterate on the basis of element */
// for (let elem of fruits) {
//   console.log(elem);
// }

/* If you want to iterate on the basis of indexing instead */
let arr = ["Apple", "Orange", "Pear"];
// for (let key in arr) {
//   console.log(arr[key]); // Apple, Orange, Pear
// }

/* For each loop */
// arr.forEach(element => {
//   console.log(element);
// });

let multiDim = [
  ["Rohan", "23", "Male"],
  ["Ravi", "22", "Male"],
  ["Punit", "5", "undefined"],
];

console.log(multiDim[0][0]);
