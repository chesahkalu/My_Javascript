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









// Syntax errors are typos or incorrectly-placed punctuation, and they're pretty common.

