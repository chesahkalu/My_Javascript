/* Random Fraction. 

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). 
Thus Math.random() can return a 0 but never quite return a 1 */

function randomFraction() {

    return Math.random();
  }
  
  /* Random Whole Number.
  
  Use Math.random() to generate a random decimal.
  Multiply that random decimal by 20.
  Use another function, Math.floor() to round the number down to its nearest whole number. */
  
  function randomWholeNum() {
    
      return Math.floor(Math.random() * 10);
    }
  
  
    /* Random Whole Number within a Range.
  
    Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.
  
    To do this, we'll define a minimum number min and a maximum number max.
  
    Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
  
    Math.floor(Math.random() * (max - min + 1)) + min
  
    Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive. */
  
    function randomRange(myMin, myMax) {
      return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    }
    