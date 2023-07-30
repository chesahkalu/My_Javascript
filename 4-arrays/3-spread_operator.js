// Spread Operator
// The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.
//...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal.
// The spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot add another element to the array with spread operator, only combine it with other arrays or strings.
// The spread operator can be used to copy an array or combine arrays, or insert all the elements of one array into another, at any index.

var anArr = [6, 89, 3, 45];
var maximus = Math.max(...anArr); // returns 89

// Copy an array
var anArr1 = [1, 2, 3];
var anArr2 = [...anArr1]; // arr2 is [1, 2, 3]

// A function that returns a copy of an array using the spread operator and a number of copies to make
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

// Concatenate arrays
var aarr1 = [0, 1, 2];
var aarr2 = [3, 4, 5];

let arr9 = [10, 20, ...aarr2, 'thirty', 'forty', 50]; // arr9 is [10, 20, 3, 4, 5, 'thirty', 'forty', 50]
let arr10 = [...aarr1, ...aarr2]; // arr10 is now [0, 1, 2, 3, 4, 5]

// Insert all elements of an array into another at any index
var barr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
var barr2 = ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

barr1.splice(1, 0, ...barr2); // barr1 is now ['JAN', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'FEB', 'MAR', 'APR', 'MAY']





// The spread operator can be used multiple times in conjunction with other elements.
// The spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
// const spreaded = ...arr; // will throw a syntax error


  //You can destructure arrays as well.
 
  const [a, b] = [1, 2, 3, 4, 5, 6];
  console.log(a, b); // 1, 2

  //The variable a is assigned the first value of the array, and b is assigned the second value of the array.
  //We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
  const [a1, b1,,, c1] = [1, 2, 3, 4, 5, 6];
  console.log(a1, b1, c1); // 1, 2, 5

  let a2 = 8, b2 = 6; // Swapping values
  [a2, b2] = [b2, a2]; // a2 = 6, b2 = 8. The array on the right hand side is destructured and assigned to the variables on the left hand side.


  //The rest element allows you to create a variable that holds the rest of an array's elements. You do this by using ... followed by the array's name. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest element to catch a subarray that leaves out the last element of the original array.
  const [a3, b3, ...arr3] = [1, 2, 3, 4, 5, 7];
  console.log(a3, b3); // 1, 2
  console.log(arr3); // [3, 4, 5, 7]

  function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list; 
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

  //The spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot add another element to the array with spread operator, only combine it with other arrays or strings.
  //The spread operator can be used to copy an array or combine arrays, or insert all the elements of one array into another, at any index.
  let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
  let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
  // thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

  //The spread operator can be used to find the maximum of an array.  
  let thisArray1 = [6, 89, 3, 45];
  let max = Math.max(...thisArray1); // max is 89

  //The spread operator can be used to evaluate arrays in-place.
  let arr4 = [6, 89, 3, 45];
  let maximus1 = Math.max.apply(null, arr4); // returns 89
  // ...arr4 returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
  
  //      const spreaded = ...arr4; // will throw a syntax error

  //The spread operator can be used to copy an array.
  let thisArray2 = [true, true, undefined, false, null];
  let thatArray2 = [...thisArray2];
  // thatArray2 equals [true, true, undefined, false, null]
