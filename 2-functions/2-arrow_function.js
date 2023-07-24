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