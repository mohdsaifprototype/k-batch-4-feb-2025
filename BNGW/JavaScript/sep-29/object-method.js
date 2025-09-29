/* const obj = { name: "Alice", age: 25 };
Object.freeze(obj);
obj.age = 30;  // This will not have any effect
console.log(obj.age); // 25 */

/* const obj = { name: "Bob", age: 30 };
Object.seal(obj);
obj.age = 31;  // This will work
delete obj.name;  // This will not work
console.log(obj); // { name: "Bob", age: 31 } */

/* const obj = { name: "Charlie" };
Object.preventExtensions(obj);
obj.age = 25;  // This will not work
obj.name = "David";  // This will work
console.log(obj); // { name: "David" } */

/* const obj = { name: "Eve" };
Object.freeze(obj);
console.log(Object.isFrozen(obj));  // true */

/* const obj = { name: "Frank" };
Object.seal(obj);
console.log(Object.isSealed(obj));  // true */

/* const obj = { name: "Grace" };
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));  // false */

/* const target = { name: "Alice" };
const source = { age: 25 };
Object.assign(target, source);
console.log(target); // { name: "Alice", age: 25 } */

/* const person = { greet: function() { return "Hello"; } };
const newPerson = Object.create(person);
console.log(newPerson.greet());  // "Hello" */

/* const obj = { name: "Bob", age: 30 };
console.log(Object.keys(obj));  // ["name", "age"] */

/* const obj = { name: "Alice", age: 25 };
console.log(Object.values(obj));  // ["Alice", 25] */

/* const obj = { name: "Bob", age: 30 };
console.log(Object.entries(obj));  // [["name", "Bob"], ["age", 30]] */

/* const entries = [["name", "Alice"], ["age", 25]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: "Alice", age: 25 } */

/* const obj = { name: "John" };
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor); // { value: "John", writable: true, enumerable: true, configurable: true } */

/* const obj = { name: "Jane", age: 22 };
console.log(Object.getOwnPropertyDescriptors(obj));
// { name: { value: "Jane", writable: true, enumerable: true, configurable: true }, age: { value: 22, writable: true, enumerable: true, configurable: true } } */

/* const obj = { name: "Jack", age: 25 };
console.log(Object.getOwnPropertyNames(obj));  // ["name", "age"] */

/* const obj = {};
const proto = Object.getPrototypeOf(obj);
console.log(proto === Object.prototype);  // true */

/* const obj = {};
const proto = { greet: function() { return "Hello"; } };
Object.setPrototypeOf(obj, proto);
console.log(obj.greet());  // "Hello" */

/* const obj = { name: "Daniel" };
console.log(obj.toString());  // "[object Object]" */

console.log(Object.is(25, 25));  // true
console.log(Object.is(NaN, NaN));  // true
