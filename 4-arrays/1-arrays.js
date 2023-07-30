//ARRAYS - This is a data structure that we use to store a collection of data. It is a list of items that can be accessed by their index number. Arrays are created with brackets [] and each item inside the array is separated by a comma.

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


//Shopping list
var myList = [["Chocolate Bar", 15], ["Biscuits", 10], ["Crisps", 5], ["Coke", 2], ["Sweets", 20]];






  
