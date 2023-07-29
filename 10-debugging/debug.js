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

// 

// Syntax errors are typos or incorrectly-placed punctuation, and they're pretty common.

