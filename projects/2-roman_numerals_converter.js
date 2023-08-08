function convertToRoman(num) {
    // Define arrays of Roman numeral symbols and their corresponding values
    var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    // Initialize an empty string to store the Roman numeral
    var result = "";
  
    // Iterate through the Roman numeral symbols and values arrays
    for (var i = 0; i < romanValues.length; i++) {
      // Repeat the current Roman numeral symbol as long as num is greater than or equal to its value
      while (num >= romanValues[i]) {
        // Append the Roman numeral symbol to the result string
        result += romanSymbols[i];
        // Subtract the value of the symbol from num
        num -= romanValues[i];
      }
    }
  
    return result; // Return the final Roman numeral
  }
  
  // Test the convertToRoman function with an example input
  console.log(convertToRoman(36)); // Output: XXXVI
  