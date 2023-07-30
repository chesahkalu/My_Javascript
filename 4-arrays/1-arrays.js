//ARRAYS

//Arrays are used to store several pieces of data in one place. They are created with brackets [] , with each item inside the brackets separated by a comma.
let myArray = ["Vee", 23]; // This is an array with a string and a number

// Find the length of an array - You can find the length of an array by writing .length after the array variable or string. This give how many items are in the array.
let arrayLength = myArray.length; // arrayLength has a value of 2

//Nested arrays - Arrays can be nested inside other arrays, like this: ["this", ["that", "the other"]]. This is called a multi-dimensional array.
let nestedArray = [["Bulls", 23], ["White Sox", 45]]; // This is a nested array with two arrays inside it

//Accessing array data with indexes - Each array item has an index number which is used to access it. Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array.
let anArray = [50,60,70];
let myData = anArray[0]; // myData has a value of 50

//Modify array data with indexes - Unlike strings, the entries of arrays are mutable and can be changed freely.
anArray[0] = 45; // anArray now has the value [45, 60, 70]. Unlike strings, arrays are mutable and can be changed freely even if they are declared with const.

//To prevent this, JavaScript provides a function Object.freeze to prevent data mutation. This can be used on arrays as well as objects.
let hisArray = [50,60,70];
Object.freeze(hisArray); // This line of code will freeze the array. The entries can't be modified.
hisArray[0] = 45; // hisArray still has the value [50, 60, 70]

//indexOf() - indexOf() allows to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // returns -1, since 'dates' is not in the array
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists

let myArray1 = ["Vee", "Vee", "Vee"];
let myData1 = myArray1.indexOf("Vee"); // myData1 has a value of 0. It returns the first index at which the element exists.

// Function that takes an array and an element as arguments, and returns true or false depending on whether the element is present in the array.
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) != -1){
    return true;
  }
  else {return false;}
}




//Access multi-dimensional arrays with indexes - One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3]; // subarray has a value of [[10, 11, 12], 13, 14]
  const elementh = myArray[2][1]; // elementh has a value of 8, the second element in the first array inside arr
  const nestedSubarray = arr[3][0]; // nestedSubarray has a value of [10, 11, 12], the first array[0] inside the main array[3]
  const element = arr[3][0][1]; // element has a value of 11, the second element[1] inside the first array[0] inside the main array[3]

//Manipulate arrays with push() - An easy way to append data to the end of an array is via the push() function.
const arr1 = [1, 2, 3];
arr1.push(4); // arr1 now has the value [1, 2, 3, 4]

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]); // arr2 now has the value ["Stimpson", "J", "cat", ["happy", "joy"]]

//Manipulate arrays with pop() - Another way to change the data in an array is with the .pop() function. .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable.
const threeArr = [1, 4, 6];
let oneDown = threeArr.pop(); // oneDown has a value of 6, and threeArr has a value of [1, 4]

//Manipulate arrays with shift() - pop() always removes the last element of an array. Shifting removes the first element of an array. shift() takes no parameters, and one element is always removed from the beginning of the array.
const ourArray = ["Stimpson", "J", ["cat"]];
let removedFromOurArray = ourArray.shift(); // removedFromOurArray now has a value of the string Stimpson, and ourArray now has ["J", ["cat"]].

//Manipulate arrays with unshift() - Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
const ourArray1 = ["Stimpson", "J", "cat"];
ourArray1.shift(); // ourArray1 now has the value ["J", "cat"]
ourArray1.unshift("Happy"); // ourArray1 now has the value ["Happy", "J", "cat"]

//Splice - splice() allows to remove any number of consecutive elements from anywhere in an array. By taking two arguments, the first is the index on the array from which to begin removing elements, and the second is the number of elements to delete.
const arr5 = [1, 2, 3, 4, 5, 6];
let spliceArr5 = arr5.splice(2, 3); // arr5 now has the value [1, 2, 6] - It removes 3 elements starting from index 2. spliceArr5 has the value [3, 4, 5] - It returns the removed elements.

//Add items using splice() - splice() can take up to three parameters. The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. And the third parameter is the item we would like to add to the array.
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 0, "a", "b"); // arr6 now has the value [1, 2, "a", "b", 3, 4, 5] - It removes 0 elements starting from index 2 and adds "a" and "b" in their place.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

//Copy array items using slice() - slice(), rather than modifying an array, copies, or extracts, a given number of elements to a new array, leaving the array it is called upon untouched. 
//It takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).
const arr7 = [1, 2, 3, 4, 5];
let arr8 = arr7.slice(1, 4); // arr8 now has the value [2, 3, 4] - It extracts elements starting from index 1 up to but not including index 4. arr7 still has the value [1, 2, 3, 4, 5]




//Split a string into an array using the split method - The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression.
let str = "Hello World";
let bySpace = str.split(" "); // bySpace has the value ["Hello", "World"]
let otherString = "How9are7you2today";
let byDigits = otherString.split(/\d/); // byDigits has the value ["How", "are", "you", "today"] - it splits the string at the digits
let byNonDigits = otherString.split(/\D/); // byNonDigits has the value ["", "9", "7", "2", ""] - it splits the string at the non-digits

//Shopping list
var myList = [["Chocolate Bar", 15], ["Biscuits", 10], ["Crisps", 5], ["Coke", 2], ["Sweets", 20]];






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

  
