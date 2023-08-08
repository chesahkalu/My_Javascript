// Functions are reuasable blocks of code that perform a specific task

// Function Declaration
function sayHello() {
    console.log("Hello");
    }

// Calling a function
sayHello(); // prints Hello

// This is a function expression ; the function is stored in a variable and can be treated like any other value. This has some subtle differences in how the code is handled by the JavaScript engine.
const sayHello = function() {
    console.log("Hello");
    }
// Calling a function expression  



// Function parameters can be used as variables inside of the function
function sayHello(name) { // parameters like this means they are already declared variables scoped to the function 
    name = "John";
    console.log("Hello " + name); // prints Hello name's value
    }

function functionWithArgs(num1, num2) {
    var sum = num1 + num2;
    console.log("The sum is: " + sum);
    }
      
    // Example usage:
    functionWithArgs(3, 5); // Output: The sum is: 8

// Returning a value from a function, the return statement ends function execution and specifies a value to be returned to the function caller
// If the return statement is without any expression, then the special value undefined is returned.
// A function can only have one return statement. However, it can have more than one return values within the return statement.
// Any code after the return statement will not execute.
function minusSeven(num) {
    return num - 7;
    }

    console.log(minusSeven(10)); // prints 3

/* Global Scope and Functions. Scope refers to the visibility of variables.
- variables defined outside of a function block have Global Scope meaning they can be seen everywhere in your JavaScript code if 
- Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
- It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable. 
- Variables which are declared without the let or const or var keywords are always global even if they are declared inside a function. Meaning they are visible throughout your code.*/

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
//The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.


/*It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:*/

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

console.log(myFun()); // prints Head because the local version of the variable is present and takes precedence over the global version

//Returning a value from a function with return, if you don't specify a return value with the return statement, the returned value will be undefined.
// Also note that you can return a value from a function with return statement , and assign it to a variable outside of the function.

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7) // returns 2

// Stand in Line, In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments. Add the number to the end of the array, then remove the first element of the array. The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
    }

    var testArr = [1,2,3,4,5];

    console.log("Before: " + JSON.stringify(testArr)); // prints Before: [1,2,3,4,5]
    console.log(nextInLine(testArr, 6)); // prints 1
    console.log("After: " + JSON.stringify(testArr)); // prints After: [2,3,4,5,6]
    

//Functions in Objects: Functions can be stored as object properties.  
const bicycle = {
  gear: 2,
  setGear: function(newGear) { // this function expression can be written as : setGear(newGear) {
    this.gear = newGear; // this keyword refers to the object that the method is associated with
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//with es6 you can remove the function keyword and colon altogether when defining functions in objects
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};


// IIFE: Immediately Invoked Function Expression, is a common pattern for executing code right as it's created.
(function () {
  console.log("A cozy nest is ready");
})(); // the two parentheses cause the function to be immediately invoked
  // prints A cozy nest is ready

  
/*Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked.
This pattern is known as an immediately invoked function expression or IIFE.*/




// Closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.
// A closure is a function having access to the parent scope, even after the parent function has closed (returned). This means a closure can remember and access variables and arguments of its outer function even after the function has finished.
// In JavaScript, closures are created every time a function is created, at function creation time and not at function execution time. It is used to create private variables and methods and to avoid polluting the global scope.

function makeFunc() {
  let name = "Mozilla"; // name is a local variable created by makeFunc.
  function displayName() { // displayName() is the inner function, a closure.
    console.log(name); // displayName() uses variable declared in the parent function.
  }
  return displayName;
}




let myFunc = makeFunc(); /* myFunc is a reference to the instance of the function displayName created when makeFunc is run. 
The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. 
For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to console.log.*/

myFunc(); // "Mozilla" is printed to the console, the value of name.