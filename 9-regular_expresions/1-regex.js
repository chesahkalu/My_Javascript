/* Regular expressions are patterns used to perform pattern-matching and "search-and-replace" functions on text in strings.
In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp,
and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String*/

// Using the Test Method, Test method is used to search for a match between a regular expression and a string.

let myString = "Hello, World!"; // This is the string we are going to search.
let myRegex = /Hello/; // This is the regular expression we are going to search for.
console.log(myRegex.test(myString)); // This will return true. If the regex is not found, it will return false.

/* Using the OR Operator, You can search for multiple patterns using the alternation or OR operator: |. If anything before the alternation operator is found, the pattern will return that match. 
If it is not found, the text after the alternation operator is checked for a match. You can have as many alternations as you want.
This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/. */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString)); // This will return true. Because cat is found in the string.

/* Ignore Case While Matching, You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag.
You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase. */

let herString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // This is the regex with the i flag to ignore the case.
console.log(fccRegex.test(herString)); // This will return true. Because the i flag is used to ignore the case.

/* Extract Matches, So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.
To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // This is the regex.
console.log(extractStr.match(codingRegex)); // This will return ["coding"].

/* Find More Than the First Match, To search or extract a pattern more than once, you can use the g flag. You can have multiple flags on your regex like /search/gi.
The g flag is used to search or extract a pattern more than once. */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // This is the regex with the g flag. and i flag to ignore the case.
console.log(twinkleStar.match(starRegex)); // This will return ["Twinkle", "twinkle"].

/* Match Anything with Wildcard Period, Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time.
Luckily, you can save time using the wildcard character: . The wildcard character . will match any one character. The wildcard is also called dot and period. 
For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.*/

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; // This is the regex. The . is the wildcard character. It will match any one character.
console.log(humStr.match(huRegex)); // This will return ["hum"].
console.log(hugStr.match(huRegex)); // This will return ["hug"].


/* Match Single Character with Multiple Possibilities, You can search for a literal pattern with some flexibility with character classes.
Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u. */

let bgRegex = /b[aiu]g/; // This is the regex. The [aiu] is the character class that will only match the characters a, i, or u.
let bag = "bag";
let big = "big";
let bug = "bug";
let bog = "bog";

console.log(bag.match(bgRegex)); // This will return ["bag"].
console.log(big.match(bgRegex)); // This will return ["big"].
console.log(bug.match(bgRegex)); // This will return ["bug"].
console.log(bog.match(bgRegex)); // This will return null.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // This is the regex. The [aeiou] is the character class that will only match the characters a, e, i, o, or u.
console.log(quoteSample.match(vowelRegex)); // This will return ["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e", "o", "i"].

/* Match Letters of the Alphabet, You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters(for example, every letter in the alphabet).
Fortunately, there is a built-in feature that makes this short and simple. Inside a character set, you can define a range of characters to match using a hyphen character: -. */
// For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat"; 
let batStr = "bat";
let matStr = "mat";
console.log(catStr.match(/[a-e]at/)); // This will return ["cat"].
console.log(batStr.match(/[a-e]at/)); // This will return ["bat"].
console.log(matStr.match(/[a-e]at/)); // This will return null.

/* Match Numbers and Letters of the Alphabet, Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5. Also, it is possible to combine a range of letters and numbers in a single character set. */

let jennyStr = "Jenny8675309";
let myRegex1 = /[a-z0-9]/ig; // This is the regex. The [a-z0-9] is the character class that will only match the characters a through z and 0 through 9.
console.log(jennyStr.match(myRegex1)); // This will return ["J", "e", "n", "n", "y", "8", "6", "7", "5", "3", "0", "9"].

/* Match Single Characters Not Specified, So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match.
These types of character sets are called negated character sets. To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters. */

let quoteSample1 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi; // This is the regex. The [^aeiou0-9] is the negated character class that will only match the characters that are not a vowel and not a number.
console.log(quoteSample1.match(myRegex2)); // This will return [" ", "b", "l", "n", "d", " ", "m", "c", "."].

