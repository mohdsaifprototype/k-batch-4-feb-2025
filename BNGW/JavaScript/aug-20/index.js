/* 
Switch statement
0 => Sunday
1 => Monday
2 => Tuesday
3 => Wednesday
4 => Thursday
5 => Friday
6 => Saturday
...
*/

// let dayNum = 12;
// switch (dayNum) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("Invalid input!");
//     break;
// }

/* Part-2 */
let dayNum = 101;
if (dayNum % 7 == 0) {
  console.log("Sunday");
} else if (dayNum % 7 == 1) {
  console.log("Monday");
} else if (dayNum % 7 == 2) {
  console.log("Tuesday");
} else if (dayNum % 7 == 3) {
  console.log("Wednesday");
} else if (dayNum % 7 == 4) {
  console.log("Thursday");
} else if (dayNum % 7 == 5) {
  console.log("Friday");
} else if (dayNum % 7 == 6) {
  console.log("Saturday");
} else {
  console.log("Invalid input");
}
