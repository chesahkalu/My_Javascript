/* Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters. */
// Sample username to be checked
let username = "JackOfAllTrades";

// Regular expression for validating the username
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

// Explanation of the regular expression:
// ^ - Start of the string
// [a-z] - First character must be a letter (lowercase)
// [a-z]+ - One or more letters (lowercase) following the first character
// \d* - Zero or more digits at the end of the username
// $ - End of the string (Ensures the regex matches the entire username)
// | - OR
// ^[a-z] - Start of the string with a letter (lowercase)
// \d\d+ - Two or more digits at the end of the username
// $ - End of the string (Ensures the regex matches the entire username)
// i - Case-insensitive flag, allowing both lowercase and uppercase letters to be matched

// Test the username against the regular expression
let result = userCheck.test(username);

// Output the result
console.log(result); // This will return true.

/*Explanation of the Regular Expression:

The regular expression /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i checks for two different patterns separated by the OR operator |.

Pattern 1: ^[a-z][a-z]+\d*$
^[a-z]: Matches a lowercase letter at the beginning of the string.
[a-z]+: Matches one or more lowercase letters after the first letter.
\d*: Matches zero or more digits at the end of the username.
$: Ensures that the regular expression matches the entire username.

Pattern 2: ^[a-z]\d\d+$
^[a-z]: Matches a lowercase letter at the beginning of the string.
\d\d+: Matches two or more digits at the end of the username.
$: Ensures that the regular expression matches the entire username.
The /i flag at the end makes the regular expression case-insensitive, allowing both lowercase and uppercase letters to be matched.

Example:
For the given username = "JackOfAllTrades", the regular expression matches the pattern 1, as it starts with a lowercase letter,
followed by one or more lowercase letters, and does not have any digits at the end. Thus, result will be true.*/