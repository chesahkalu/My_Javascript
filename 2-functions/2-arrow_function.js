/*In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. 
Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:*/

const aFunc = function() {
  const myVar = "value";
  return myVar;
}

//ES6 (the next version of JavaScript) provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const theFunc = () => {
  const myVar = "value";
  return myVar;
}


//When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
const myFunc = () => "value"; //This code will still return the string value by default.


const magic = () => new Date(); //This is an arrow function that returns the date object.
console.log(magic());




//Just like a regular function, you can pass arguments into an arrow function.
const doubler = (item) => item * 2;
doubler(4); //return the value 8.

//If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const myDoubler = item => item * 2;


//It is possible to pass more than one argument into an arrow function.
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); //return the value 8.

const myConcat = (arr1, arr2) => arr1.concat(arr2); //This is an arrow function that returns the concatenated array.
console.log(myConcat([1, 2], [3, 4, 5])); // prints [1, 2, 3, 4, 5]




//In order to help us create more flexible functions, ES6 introduces default parameters for functions.
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // prints Hello John
console.log(greeting());  // prints Hello Anonymous

/*The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above,
the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want*/

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
/*getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
You can simply write x once, and it will be converted to x: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:*/

const getMousePosition2 = (x, y) => ({ x, y });
