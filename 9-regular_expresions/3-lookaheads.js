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
