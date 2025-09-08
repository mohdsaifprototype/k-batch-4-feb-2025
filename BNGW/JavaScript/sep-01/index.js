/* 
Topic: String and it's method.
String is a collection of more than 1 character stored as a single value.

We represent string using quotes
i.e.,
'This is a string'
"This is a string"

There is a a special type of string aka string template or template literal.
We use backtick for that.
e.g.,
let usr = "Alex Brown";
let message = `Hi there ${usr}, learning JavaScript is fun.`;
console.log(message);
*/

// let str = "Hello there!";
// console.log(str.length);

// console.log(str[str.length - 1]);
// console.log(str.slice(6,11));
// console.log("Uppercase:", str.toUpperCase());
// console.log("Lowercase:", str.toLowerCase());

let str = 'Widget with id';

console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('Widgets') ); // -1, not found, the search is case-sensitive
console.log( str.indexOf("with") ); // 1, "id" is found at the position 1 (..idget with id)