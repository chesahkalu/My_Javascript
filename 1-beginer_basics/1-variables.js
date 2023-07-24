//Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

// "var" , "let", "constant" can be used to declar variables in JS...


var a = 10; //var is used to declare a variable
let b = 20; //let is used to declare a variable
const c = 30; //const is used to declare a variable

//var has issues where it can be redeclared and redefined, whcih can cause issues in the code

var a = 40; //redeclaring the variable a
a = 50; //redefining the variable a

//let is a better option as it can be redefined but not redeclared. Redifing means changing the value of the variable. Redeclaring means declaring the variable again. Best for mutable variables.

let b = 60; //redeclaring the variable b is not possible
b = 70; //redefining the variable b

//constant is the best option as it cannot be redefined or redeclared , and it is read only. You should always name variables you don't want to reassign using the const keyword.
const c = 80; //redeclaring the variable c is not possible
c = 90; //redefining the variable c is not possible
//However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

/*When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, 
statement, or expression, its scope is limited to that block, statement, or expression.*/
function checkScope() {
    const i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i); // Block scope i is:  block scope
    }
    console.log('Function scope i is: ', i); // Function scope i is:  function scope 
    return i;
  } 










  

/*Note: It is common for developers to use UPPER_CASE variable identifiers for immutable values and lower_case or camelCase for mutable values (objects and arrays).
You will learn more about objects, arrays, and immutable and mutable values in later challenges.*/

//JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

//undefined - undefined is a data type whose variable is not defined. If a variable is declared but not assigned a value, then its value is undefined.
let a;
console.log(a); // Prints undefined

//null - null is a data type that represents the intentional absence of a value, and is represented by the keyword null.
let a = null;
console.log(a); // Prints null

//boolean - Boolean is another data type that has two possible values of true or false. It is helpful to think of it as a yes/no on or off switch, or as a light switch that can only be on or off.
let a = true;
let b = false;

//string - Strings are used to represent text and are wrapped in either single or double quotes.
let a = "Hello";

//symbol - Symbols are newer than other data types in JavaScript. A Symbol is an immutable primitive value that is unique. For the sake of comparison, think of symbols as unique and immutable strings.
let sym1 = Symbol();
let sym2 = Symbol("foo");

//bigint - BigInt is a new data type that can represent integers of arbitrary length. A BigInt is created by appending n to the end of an integer, like this:
let a = 1234567890123456789012345678901234567890n;

//number - In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types exist, for example integers, floats, doubles, or bignums.
let a = 5;
let b = 5.5;

let add = 87; 
add++;


const myDecimal = 5.7;  // Decimal / Float /


const remainder = 11 % 3; // Remainder, gives the remainder of the division of two numbers

let a = 3;
a += 12; //+= operator a = a + 12  (works for all operators)



//object - Objects are used to store a collection of data and more complex entities. Objects consist of key-value pairs, which are also called properties. Properties are separated by commas.
let obj = {
    name: "Vee",
    age: 20,
    isMale: true
};
