/* A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes. */

// Function to check if a string is a palindrome
function palindrome(str) {
    // Convert the input string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[\W_]/g, "");
  
    // Reverse the cleaned string
    var reversedStr = str.split("").reverse().join("");
  
    // Check if the original string is the same as the reversed string
    if (str === reversedStr) {
      return true; // It's a palindrome
    } else {
      return false; // It's not a palindrome
    }
  }
  
  // Test the palindrome function with an example input
  console.log(palindrome("eye")); // Output: true
  