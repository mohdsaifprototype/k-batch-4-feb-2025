/* 
Array is a non-primitive data structure.
Array is a collecion of more than one values stored in a single variable.
Array size      --> arr.length;
Array element   --> ["element1", "element2", "..."]
Array indexing  --> arr[0]
last indexing of an array is (arr.length - 1) or we can use -ve indexing as well with the help of arr.at(-1) method.
*/

let student = ["Ankush", "Aman Kanojia", "Punit Kumar", "Ravi", "Rohan Mehra"];
/* To access any specific element we use their index value as follows: */
// console.log(student[4]);

console.log("Array", student);
console.log("Array length:", student.length);
/* To add a new element in the array */
student.push("Biral Bhatnagar");
console.log("Array", student);
student.pop();
console.log("Array", student);

// student[10] = "Alexender Block";
// console.log("Array length:", student.length);
// console.log("Array", student);

student.unshift("Ayan");
console.log("Array", student);

student.shift();
console.log("Array", student);

// for (let i = 0; i < student.length; i++) {
//   console.log("Hello", student[i])
// }

/* Ways to print the last element of an array */
console.log(student[student.length -1]);