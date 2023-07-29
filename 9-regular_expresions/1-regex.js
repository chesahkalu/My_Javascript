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

/* Match Characters that Occur One or More Times, Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other. */

let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // This is the regex. The + is the character that has to repeat one after the other.
console.log(difficultSpelling.match(myRegex3)); // This will return ["ss", "ss"].

/* Match Characters that Occur Zero or More Times, There's also an option that matches characters that occur zero or more times(Empty strings), You can use the * character to do this.
The character to do this is the asterisk or star: *. */

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // This is the regex. The * is the character that has to repeat zero or more times.
console.log(chewieQuote.match(chewieRegex)); // This will return ["Aaaaaaaaaaaaaaaa"].

/* Find Characters with Lazy Matching, In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern. */

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // This is the regex. The *? is the character that has to repeat zero or more times. Remember the ? character matches the smallest possible part of the string that satisfies the regex pattern and . matches any character, including whitespace.
console.log(text.match(myRegex4)); // This will return ["<h1>"] instead of ["<h1>Winter is coming</h1>"].

/* Match Beginning String Patterns, Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.
In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched].
Outside of a character set, the caret is used to search for patterns at the beginning of strings. */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // This is the regex. The ^ is the character that has to be at the beginning of the string.
console.log(calRegex.test(rickyAndCal)); // This will return true.
console.log(rickyAndCal.match(calRegex)); // This will return ["Cal"].
console.log(rickyAndCal.match(/^Cal/)); // This will return ["Cal"].
console.log(rickyAndCal.match(/^Ricky/)); // This will return null. Because the string Ricky is not at the beginning of the string.

/* Match Ending String Patterns, You can search the end of strings using the dollar sign character $ at the end of the regex. */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // This is the regex. The $ is the character that has to be at the end of the string.
console.log(lastRegex.test(caboose)); // This will return true.
console.log(caboose.match(lastRegex)); // This will return ["caboose"].
console.log(caboose.match(/caboose$/)); // This will return ["caboose"].

/* Match All Letters and Numbers, Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_). */

let longHand = /[A-Za-z0-9_]+/; // This is the regex. The [A-Za-z0-9_] is the character class that will match all letters of the alphabet plus numbers. + is the character that has to repeat one or more times.
let shortHand = /\w+/; // This is the regex. The \w is the character class that will match all letters of the alphabet plus numbers. + is the character that has to repeat one or more times.
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); // This will return true. Because the string 42 is a number.
console.log(shortHand.test(numbers)); // This will return true. Because the string 42 is a number.
console.log(longHand.test(varNames)); // This will return true. Because the string important_var is a string.
console.log(shortHand.test(varNames)); // This will return true. Because the string important_var is a string.

let quoteSample2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // This is the regex. The \w is the character class that will match all letters of the alphabet plus numbers.
console.log(quoteSample2.match(alphabetRegexV2).length); // This will return 31. It will match all letters of the alphabet plus numbers.

/* Match Everything But Letters and Numbers, You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.
You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_]. */

let shortHand2 = /\W/; // This is the regex. The \W is the character class that will match everything but letters of the alphabet plus numbers.
let numbers2 = "42%";
let sentence = "Coding!";
console.log(numbers2.match(shortHand2)); // This will return ["%"].
console.log(sentence.match(shortHand2)); // This will return ["!"].

let quoteSample3 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // This is the regex. The \W is the character class that will match everything but letters of the alphabet plus numbers. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(quoteSample3.match(nonAlphabetRegex).length); // This will return 6. It will match all characters that are not letters of the alphabet plus numbers.

/* Match All Numbers, You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.
The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine. */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // This is the regex. The \d is the character class that will match all numbers. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(movieName.match(numRegex).length); // This will return 4. It will match all numbers.

/* Match All Non-Numbers, The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.
The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine. */

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // This is the regex. The \D is the character class that will match all non-numbers. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(movieName2.match(noNumRegex).length); // This will return 17. It will match all non-numbers.

/* Restrict Possible Usernames, Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters. */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result); // This will return true.


/* Match Whitespace, The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.
You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g; // This is the regex. The \s is the character class that will match all whitespace. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(whiteSpace.match(spaceRegex)); // This will return [" ", " "].

/* Match Non-Whitespace Characters, You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.
Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
You can think of it being similar to the character class [^ \r\t\f\n\v]. */

let whiteSpace2 = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g; // This is the regex. The \S is the character class that will match all non-whitespace. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(whiteSpace2.match(nonSpaceRegex).length); // This will return 32. It will match all non-whitespace.

/* Specify Upper and Lower Number of Matches, Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters.
These are convenient but sometimes you want to match a certain range of patterns.
You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns. */
//For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; // This is the regex. The {3,5} is the quantity specifier that will match between 3 and 5 a's. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(multipleA.test(A4)); // This will return true.
console.log(multipleA.test(A2)); // This will return false.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // This is the regex. The {3,6} is the quantity specifier that will match between 3 and 6 h's. g is the global flag that will match all occurrences of the pattern in all of the string.
let result2 = ohRegex.test(ohStr);
console.log(result2); // This will return true.

/* Specify Only the Lower Number of Matches, You can specify the lower and upper number of patterns with quantity specifiers using curly brackets.
Sometimes you only want to specify the lower number of patterns with no upper limit.
To only specify the lower number of patterns, keep the first number followed by a comma. */
//For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

let A5 = "haaaah";
let A6 = "haah";
let A7 = "hah";
let multipleA2 = /ha{3,}h/; // This is the regex. The {3,} is the quantity specifier that will match 3 or more a's. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(multipleA2.test(A5)); // This will return true.
console.log(multipleA2.test(A6)); // This will return false.
console.log(multipleA2.test(A7)); // This will return false.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // This is the regex. The {4,} is the quantity specifier that will match 4 or more z's. g is the global flag that will match all occurrences of the pattern in all of the string.
let result3 = haRegex.test(haStr);
console.log(result3); // This will return true.

/* Specify Exact Number of Matches, You can specify the lower and upper number of patterns with quantity specifiers using curly brackets.
Sometimes you only want a specific number of matches.
To specify a certain number of patterns, just have that one number between the curly brackets. */

let A8 = "haaaah";
let A9 = "haah";
let A10 = "hah";
let multipleA3 = /ha{3}h/; // This is the regex. The {3} is the quantity specifier that will match exactly 3 a's. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(multipleA3.test(A8)); // This will return true.
console.log(multipleA3.test(A9)); // This will return false.
console.log(multipleA3.test(A10)); // This will return false.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // This is the regex. The {4} is the quantity specifier that will match exactly 4 m's. g is the global flag that will match all occurrences of the pattern in all of the string.
let result4 = timRegex.test(timStr);
console.log(result4); // This will return true.

/* Check for All or None, Sometimes the patterns you want to search for may have parts of it that may or may not exist.
However, it may be important to check for them nonetheless.
You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. */
//For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/; // This is the regex. The ? is the character that will match 0 or 1 of the preceding element. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(rainbowRegex.test(american)); // This will return true.
console.log(rainbowRegex.test(british)); // This will return true.

let favWord = "favorite";
let favRegex = /favou?rite/; // This is the regex. The ? is the character that will match 0 or 1 of the preceding element. g is the global flag that will match all occurrences of the pattern in all of the string.
let result5 = favRegex.test(favWord);
console.log(result5); // This will return true.

/* Positive and Negative Lookahead, Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
This can be useful when you want to search for multiple patterns over the same string.
There are two kinds of lookaheads: positive lookahead and negative lookahead.
A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there.
A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
The rest of the pattern is returned if the negative lookahead part is not present. */
//Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // This is the regex. The (?=u) is the positive lookahead that will match q only if it is followed by a u. g is the global flag that will match all occurrences of the pattern in all of the string.
let qRegex = /q(?!u)/; // This is the regex. The (?!u) is the negative lookahead that will match q only if it is not followed by a u. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(quit.match(quRegex)); // This will return ["q"].
console.log(noquit.match(qRegex)); // This will return ["q"].

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // This is the regex. The (?=\w{6}) is the positive lookahead that will match passwords that are greater than 5 characters long. The (?=\w*\d{2}) is the positive lookahead that will match passwords that have two consecutive digits. g is the global flag that will match all occurrences of the pattern in all of the string.
let result6 = pwRegex.test(sampleWord);
console.log(result6); // This will return true.

/* Check For Mixed Grouping of Characters, Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
Then check whether the desired string groups are in the test string by using the test() method. */
//This will return true.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/; // This is the regex. The (engu|umpk) is the group of characters that will match either engu or umpk. g is the global flag that will match all occurrences of the pattern in all of the string.
testRegex.test(testStr); // This will return true.

let myString2 = "Eleanor Roosevelt";
let myRegex22 = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // This is the regex. The (Franklin|Eleanor) is the group of characters that will match either Franklin or Eleanor. The (([A-Z]\.?|[A-Z][a-z]+) )? is the group of characters that will match either a middle name or a middle initial. The ([A-Z]\.?|[A-Z][a-z]+) is the group of characters that will match either a middle initial or a middle name. The ? is the character that will match 0 or 1 of the preceding element. The g is the global flag that will match all occurrences of the pattern in all of the string.
let result7 = myRegex22.test(myString2); // This will return true.
console.log(result7);

/* Reuse Patterns Using Capture Groups, Some patterns you search for will occur multiple times in a string.
It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.
You can search for repeat substrings using capture groups.
Parentheses, ( and ), are used to find repeat substrings.
You put the regex of the pattern that will repeat in between the parentheses. */
//To specify where that repeat string will appear, you use a backslash (\) and then a number.
//This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+)\s\1\s\1/; // This is the regex. The (\w+) is the group of characters that will match any word character one or more times. The \s is the character that will match any whitespace character one time. The \1 is the character that will match the first group of characters that is repeated. g is the global flag that will match all occurrences of the pattern in all of the string.
let result8 = repeatRegex.test(repeatStr);
console.log(result8); // This will return true.
let result9 = repeatStr.match(repeatRegex);
console.log(result9); // This will return ["row row row", "row"].

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // This is the regex. The ^ is the character that will match the beginning of the string. The (\d+) is the group of characters that will match any digit character one or more times. The \1 is the character that will match the first group of characters that is repeated. The $ is the character that will match the end of the string. g is the global flag that will match all occurrences of the pattern in all of the string.
console.log(result10); // This will return true.
let result11 = repeatNum.match(reRegex);
console.log(result11); // This will return ["42 42 42", "42"].

/* Use Capture Groups to Search and Replace, Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
You can search and replace text in a string using .replace() on a string.
The inputs for .replace() is first the regex pattern you want to search for.
The second parameter is the string to replace the match or a function to do something. */

let wrongText = "The sky is silver.";
let silverRegex = /silver/; // This is the regex. The silver is the string that will be replaced. g is the global flag that will match all occurrences of the pattern in all of the string.
wrongText.replace(silverRegex, "blue"); // This will return "The sky is blue.".

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // This is the regex. The (\w+) is the group of characters that will match any word character one or more times. The \s is the character that will match any whitespace character one time. g is the global flag that will match all occurrences of the pattern in all of the string.
let replaceText = "$3 $2 $1"; // This is the string that will replace the matched text. The $3 is the character that will match the third group of characters that is repeated. The $2 is the character that will match the second group of characters that is repeated. The $1 is the character that will match the first group of characters that is repeated.
let result12 = str.replace(fixRegex, replaceText);
console.log(result12); // This will return "three two one".

/* Remove Whitespace from Start and End, Sometimes whitespace characters around strings are not wanted but are there.
Typical processing of strings is to remove the whitespace at the start and end of it.
Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings. */

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // This is the regex. The ^ is the character that will match the beginning of the string. The \s+ is the character that will match any whitespace character one or more times. The | is the character that will match either the beginning or the end of the string. The $ is the character that will match the end of the string. g is the global flag that will match all occurrences of the pattern in all of the string.
let result13 = hello.replace(wsRegex, ""); // This will return "Hello, World!".
