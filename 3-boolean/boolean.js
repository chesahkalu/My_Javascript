
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

/*The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa.
Like the equality operator, the inequality operator will convert data types of values while comparing.*/

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

function testNotEqual(val) {
    if (val != 99) {
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

//Strict inequality (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa, and would not convert data types while comparing.

/*The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.*/

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }
  
    if (val > 10) { 
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  /*The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, */

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

/*The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right,
 it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.*/

 /*The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true.
 If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types. */

 function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 12) { 
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);