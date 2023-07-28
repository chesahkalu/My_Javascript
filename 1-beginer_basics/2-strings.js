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

myStrr += "This is the second sentence."; // this is possibe with a string variable


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


//Template literals - Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
const person = {
    name: "Zodiac Hasbro",
    age: 56
    };

const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;

console.log(greeting); // Prints Hello, my name is Zodiac Hasbro! I am 56 years old.
/*A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. This is the basic feature of a template literal. It makes creating complex strings easier.
Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. with the (`) , the string can be written in multiple lines, as it is in the code.
The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. 
To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 
Similarly, you can include other expressions in your string literal, for example ${a + b}. 
This new way of creating strings gives you more flexibility to create robust strings. */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
   
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`this is it = ${arr[i]}</li>`); //with the (`), the strings will come out in multiple lines, as it is in the code.
    }
   
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);


//You can also use template literals for multi-line strings. You can do this by adding a backslash (\) at the end of the first line.
const str = `This is the first line \
This is the second line \
This is the third line`;

console.log(str); // Prints This is the first line This is the second line This is the third line





