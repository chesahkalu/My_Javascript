// STRING
let mystrng = "Hello World!"; // String

// Escape sequences and characters in strings
const mySt = "I am a \"double quoted\" string inside \"double quotes\"."; // Escaping literal quotes in strings, this tells JS that the quotes are not the end of the string

const lele = 'I am a "double quoted" string inside "double quotes".'; // This is another way to escape quotes, if you use single quotes to define the string, you can use double quotes inside the string without escaping them, vice versa

/*
Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use characters you may not otherwise be able to use in a string.

Code	Output
\'	single quote
\"	double quote
\\	backslash       - Note that the backslash itself must be escaped in order to display as a backslash.
\n	newline         - Prints the text after it in a new line
\t	tab
\r	carriage return - Prints the text after it in a new line
\b	backspace       - Removes the character before it
\f	form feed       - Prints the text after it in a new line

*/

let strr;
strr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
console.log(strr); // Prints the following:
/*
FirstLine
    \SecondLine
ThirdLine
*/

// Concatenating strings with the + operator
const myStr = "This is the start. " + "This is the end."; 

// Concatenating strings with the += operator
let myStrr = "This is the first sentence. ";

myStr += "This is the second sentence."; // this is possibe with a string variable


const myName = "Vee";
const ourStr = "My name is " + myName + "and I am well";

//length of a string
const strLength = myName.length; //length of a string is the number of characters in it including spaces and special characters

console.log(strLength); // Prints 3
console.log("My name is Vee and I am well".length); // Prints 27

//Bracket notation to find the character in a string. The index of the first character is 0, and the index of the last character is equal to the length of the string minus 1.
let firstLetterOfLastName = "";
let sixthLetterOfLastName = "";
let lastLetterOfLastName = "";
let secondToLastLetterOfLastName = "";

const lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; //firstLetterOfLastName would have a value of the string L. 
sixthLetterOfLastName = lastName[4]; //fifthLetterOfLastName would have a value of the string l.
lastLetterOfLastName  = lastName[lastName.length - 1]; // lastLetterOfLastName would have a value of the string e.
secondToLastLetterOfLastName = lastName[lastName.length - 2]; // secondToLastLetterOfLastName would have a value of the string c.

//String immutability - Strings index values are immutable, which means that once a string is created, it cannot be changed. The only way to change it is to assign it with a new string.\
let immStr = "Jello World";
immStr[0] = "H"; // This is not possible, it will not change the value of myStr
immStr = "Hello World"; // This is possible, it will change the value of myStr
