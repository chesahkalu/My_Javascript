/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) {
    // Initialize an empty string to store the encrypted result
    var result = "";
  
    // Iterate through each character in the input string
    for (var i = 0; i < str.length; i++) {
      // Get the ASCII code of the current character
      var charCode = str.charCodeAt(i);
  
      // Check if the character is an uppercase letter (A-Z)
      if (charCode >= 65 && charCode <= 90) {
        // Rotate the character code by 13 positions
        var rotatedCharCode = ((charCode - 65 + 13) % 26) + 65;
  
        // Convert the rotated character code back to a character and append to the result
        result += String.fromCharCode(rotatedCharCode);
      } else {
        // If the character is not an uppercase letter, append it to the result unchanged
        result += str[i];
      }
    }
  
    return result; // Return the encrypted string
  }
  
  // Test the rot13 function with an example input
  console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
  