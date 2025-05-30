"use strict";
/* 
  Topic: JavaScript Variables and Datatypes

  Q: What's a variable?
  A: In JavaScript a variable is an empty container that stores data.

  Q: What's a datatype?
  A: A datatype describe the type of data.

  Q: What's the difference b/w data & information?
  A: raw or unprocessed form of information is called data. Whereas information is the processed data.
  
  Note: There are many types of data in most of the programming languages such as:
  1. Primitive datatype (pre defined)
    integer,
    float (decimal number),
    character,
    string (collection of more tha one character),
    boolean (true or false),
  
  2. Non-primitive datatype (user-defined)
    array (homogeneous or heterogeneous)
    object


  In JavaScript there are 8 datatypes:
  1. Number
  2. BigInt
  3. String
  4. Boolean
  5. Null
  6. Undefined
  7, 8. Symbols and Object
*/

/* 
  When working with variable we should remember that JavaScript is a dynamically typed (loosely typed) language. Means once you create/declare a variable we can assign any type of value.
  e.g.,

  myVariable = 1;
  myVariable = "Hello";
  myVariable = [1, "hello"];

  There are two limitations on variable names in JavaScript:
  1. The name must contain only letters, digits, or the symbols $ and _
  2. The first character must not be a digit.

  Declaration means creating a variable;
  So, to declare a variable we use one of the following keyword.
  +---------------+----------+-----------------+---------------+---------------+
  | Keyword       | Scope    | Redeclaration   | Redefinition  | Introduced    |
  +===============+==========+=================+===============+===============+
  | var           | Global   | Allowed         | Allowed       | Old Way       |
  +---------------+----------+-----------------+---------------+---------------+
  | let           | Local    | Denied          | Allowed       | ES6           |
  +---------------+----------+-----------------+---------------+---------------+
  | const         | Local    | Denied          | Denied        | ES6           |
  +---------------+----------+-----------------+---------------+---------------+
*/

/* The following code will throw an error in strict mode */
// myVariableName = 12;
// console.log("The value of my Variable is:", myVariableName);

// var age;        // Declaration
// age = 23;       // Definition
// console.log("Age is:", age);

// var age = 24;   // Redeclaration
// console.log("Age is:", age);

// age = 25;       // Redefinition
// console.log("Age is:", age);

// let age;        // Declaration
// age = 23;       // Definition
// console.log("Age is:", age);

// age = 25;       // Redefinition
// console.log("Age is:", age);

// var age = 24;   // Redeclaration will through an error
// console.log("Age is:", age);

const age = 23; // Declaration and definition must be written together
console.log("Age is:", age);

// const age = 24;   // Redeclaration will through an error
// console.log("Age is:", age);

// age = 25;       // Redefinition will through an error
// console.log("Age is:", age);