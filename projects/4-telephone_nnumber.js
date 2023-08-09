function telephoneCheck(str) {
    // Regular expression pattern to match valid US phone numbers
    var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
    // Test the input string against the pattern
    return pattern.test(str);
  }
  
  // Test the telephoneCheck function with an example input
  console.log(telephoneCheck("555-555-5555")); // Output: true

  
/*
Here's how the telephoneCheck function works:

It defines a regular expression pattern pattern to match valid US phone numbers.

The pattern ^(1\s?)? matches an optional "1" followed by an optional space. This handles the case of a country code.

The pattern (\(\d{3}\)|\d{3}) matches either three digits enclosed in parentheses or three standalone digits. This handles the formats with or without parentheses around the area code.

The pattern ([\s\-]?) matches an optional space or hyphen after the area code.

The pattern \d{3} matches three digits for the next part of the phone number.

The pattern ([\s\-]?) matches an optional space or hyphen after the first three digits of the main part of the phone number.

The pattern \d{4}$ matches the last four digits of the phone number.

The test() method is used to check if the input string matches the defined pattern.

The function returns true if the pattern matches the input string, indicating that it's a valid US phone number.

The function is tested with an example input using console.log(telephoneCheck("555-555-5555"));, which will output true for the valid phone number format.

Keep in mind that regular expressions are used here to match the given formats of US phone numbers. This function provides a basic validation,
and you can adjust the regular expression pattern if you need to handle additional variations.
*/