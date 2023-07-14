/*if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions,
defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, 
the statement inside the curly braces will not execute.*/

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }

    console.log(test(true)); // prints It was true
    console.log(test(false)); // prints It was false


// Comparison with the Equality Operator
// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value. 
// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not.
// Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
    if (myVal == 10) {
       return "Equal";
    }
    return "Not Equal";
  }
/*If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. */
    console.log(equalityTest(10)); // prints Equal
    console.log(equalityTest(12)); // prints Not Equal


/*In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion.
Once it does, however, it can compare terms as follows:        */

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

/*Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, 
the strict equality operator does not perform a type conversion. If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.*/

//In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'