/* Debugging is the process of finding exactly what isn't working and fixing it. After spending time creating a brilliant block of code, 
it is tough realizing it may have errors. These issues generally come in three forms: syntax errors that prevent a program from running, r
untime errors when code fails to execute or has unexpected behavior, and semantic (or logical) errors when code doesn't do what it's meant to.*/

// Use console.log() to Print Debugging Information to the Console: Placing console.log() statements around the code blocks you have been working on can tell you a lot about what the code is doing and where the problem might be.

console.log('Hello World'); // prints Hello World

/* Use typeof to Check the Type of a Variable: You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, 
but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.*/

console.log(typeof ""); // prints string
console.log(typeof 0); // prints number
console.log(typeof []); // prints object
console.log(typeof {}); // prints object

// Catch Misspelled Variable and Function Names: One-character typos might not be caught by your browser, but you can manually check your spelling and grammar in your code editor. example:
let receivables = 10;
let payables = 8;

let netWorkingCapital = recievables - payable; // on a valid code editor, this will be highlighted as a typo

/* Catch Unclosed Parentheses, Brackets, Braces and Quotes: Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair.
Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding 
a callback function as an argument to a method. One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back
between them and continue coding. Fortunately, most modern code editors generate the second half of the pair automatically.*/

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current); // reduce is a method that sums all the values of an array, previous and current are the parameters of the function.
console.log(`Sum of array values is: ${arraySum}`);

/* Catch Mixed Usage of Single and Double Quotes: JavaScript allows the use of both single (') and double (") quotes to declare a string. Deciding which one to use generally comes down to personal preference,
with some exceptions. Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.*/
// These are correct:

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";

// This is incorrect:

// .... const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.'; // Throws an error because the single quote in the string is not escaped, which means it is closed early.
const uhOhGroucho = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.'; // this is correct

/* The assignment operator (=) in JavaScript assigns a value to a variable name. And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).
It is possible to assign a value to a variable using == or === in place of =. This allows you to avoid the common mistake of using a single equal sign when you meant to assign a value to a variable.*/

let x = 7; // this assings the value 7 to the variable x
let y = 9; 
let result = "to come";

if(x = y) {  // this assigns the value of y to x .  if (x == y) would be the correct way to compare these two variables.
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

/* Functions can be assinged to variables in JavaScript, and are known as function expressions. The variable name can then be used to call the function. 
But calling a function without an argument might make us forget the empty () at the end.*/

function myFunction() {
    return "You rock!";
  }

let varOne = myFunction; // this assigns the function myFunction to the variable varOne
let varTwo = myFunction(); // this assigns the value returned by the function myFunction to the variable varTwo, this is an example of a function call
console.log(varOne); // prints the function myFunction
console.log(varOne()); // prints the value returned by the function myFunction
console.log(varTwo); // prints the value returned by the function myFunction


/* Catch Arguments Passed in the Wrong Order When Calling a Function: Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order.
If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense.
Make sure to supply all required arguments, in the proper order to avoid these issues.*/
// These are correct:

function raiseToPower(b, e) {
    return Math.pow(b, e);
    }

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power); // prints 8

// And this is incorrect:

// function raiseToPower(b, e) {
//     return Math.pow(e, b); // this will return the value of e to the power of b, instead of b to the power of e
//     }

// let base = 2;
// let exp = 3;
// let power = raiseToPower(exp, base);
// console.log(power); // prints 9

/* Catch Off By One Errors When Using Indexing: Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment),
or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length,
the program may throw an "index out of range" reference error or print undefined. When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand
if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors:*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) { // this will print the whole alphabet plus undefined, because the last index is len - 1
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) { // this will print the whole alphabet minus a, because the first index is 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {  // this will print the whole alphabet
  console.log(alphabet[k]);
}






// Syntax errors are typos or incorrectly-placed punctuation, and they're pretty common.

