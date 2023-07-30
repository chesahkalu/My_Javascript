//Some FUNCTIONAL PROGRAMMING concepts

//Functional programming is a style of programming where solutions are simple, using simpe algorithms for isolated functions, without any side effects outside of the function scope.
//INPUT -> PROCESS -> OUTPUT
//Functional programming is about:
// 1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
// 2) Pure functions - the same input always gives the same output
// 3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled



// Some functions:

// Function that reverses a string
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  
  // Function that returns the factorial of a number. Eg: 5! = 5 * 4 * 3 * 2 * 1 = 120
  function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
  function factorialize(num) {
    if (num === 0) { return 1; }
    return num * factorialize(num-1); // recursively calls the function until the condition is met
  }
  
  
  // Function that finds the longest word in a string
  function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        if (currentLength > longestLength) {
          longestLength = currentLength;
        }
        currentLength = 0;
      } else {
        currentLength++;
      }
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    
    return longestLength;
    }
  
  function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length)); // the spread operator ... is used to pass an array of arguments to a function
  }
  
  
  // Function that returns the largest number in an array
  function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }
  
  function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null)); // Function.prototype.apply() allows you to call a function with a given this value and an array of arguments
  }
  
  
  // Function that checks if a string ends with the given target string
  function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  function confirmEnding(str, target) {
    return str.slice(-target.length) === target; // negative numbers in slice() represent the number of characters from the end of the string
  }
  
  
  // Function that repeats a string num times
  function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num-1);
    }
  }
  
  function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : "";
  }
  
  
  // Function that truncates a string if it is longer than the given maximum string length. The truncation includes the ellipsis characters and the ellipsis characters do not count towards the string length.
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "..."; // slice() extracts a part of a string and returns the extracted part in a new string
    } else {
      return str;
    }
  }
  
  function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
  
  
  // Function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
  function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) { // if func(num) is true
        return num;
      }
    }
    return undefined;
  }
  
  // Function that checks if a value is classified as a boolean primitive. Return true or false.
  function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  
  // Function that returns the provided string with the first letter of each word capitalized. The rest of the word should be in lower case.
  function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase()); // \s matches any whitespace character, \S matches any non-whitespace character, g is a global search
  }
  
  function titleCase(str) {
    let titled = str.toLowerCase().split(" ");
    for (let i = 0; i < titled.length; i++) {
      titled[i] = titled[i][0].toUpperCase() + titled[i].slice(1);
    }
    return titled.join(" ");
  }
  
  
  // Slice and Splice: Function that copies each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
  function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1); // ... is the spread operator
    return newArr;
  }
  
  
  // Falsy Bouncer: Function that removes all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  function bouncer(arr) {
    return arr.filter(Boolean); // Boolean is a function that returns true or false
  }
  
  
  // Where do I Belong: Function that returns the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
  function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b); // sort() sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      } 
    }
    return arr.length;
  }
  
  // Mutations: Function that returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

    function mutation(arr) {
        let first = arr[0].toLowerCase();
        let second = arr[1].toLowerCase();
        for (let i = 0; i < second.length; i++) {
            if (first.indexOf(second[i]) === -1) {
            return false;
            }
        }
        return true;
        }

    function mutation(arr) {
        return arr[1].toLowerCase().split("").every(letter => arr[0].toLowerCase().indexOf(letter) !== -1);
        }

    function mutation(arr) {
        return arr[1].toLowerCase().split("").every(letter => arr[0].toLowerCase().includes(letter));
        }

    // Chunky Monkey: Function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
    function chunkArrayInGroups(arr, size) {
        let newArr = [];
        for (let i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        return newArr;
        }

    function chunkArrayInGroups(arr, size) {
        let newArr = [];
        while (arr.length > 0) {
            newArr.push(arr.splice(0, size));
        }
        return newArr;
        }
