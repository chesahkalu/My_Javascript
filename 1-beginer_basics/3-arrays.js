//ARRAYS

//Arrays are used to store several pieces of data in one place. They are created with brackets [] , with each item inside the brackets separated by a comma.
let myArray = ["Vee", 23]; // This is an array with a string and a number

//Nested arrays - Arrays can be nested inside other arrays, like this: ["this", ["that", "the other"]].
let nestedArray = [["Bulls", 23], ["White Sox", 45]]; // This is a nested array with two arrays inside it

//Accessing array data with indexes - Each array item has an index number which is used to access it. Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array.
let anArray = [50,60,70];
let myData = anArray[0]; // myData has a value of 50

//Modify array data with indexes - Unlike strings, the entries of arrays are mutable and can be changed freely.
anArray[0] = 45; // anArray now has the value [45, 60, 70]. Unlike strings, arrays are mutable and can be changed freely even if they are declared with const.

//To prevent this, JavaScript provides a function Object.freeze to prevent data mutation. This can arrays as well as objects.
let hisArray = [50,60,70];
Object.freeze(hisArray); // This line of code will freeze the array. The entries can't be modified.
hisArray[0] = 45; // hisArray still has the value [50, 60, 70]


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

//Shopping list
var myList = [["Chocolate Bar", 15], ["Biscuits", 10], ["Crisps", 5], ["Coke", 2], ["Sweets", 20]];