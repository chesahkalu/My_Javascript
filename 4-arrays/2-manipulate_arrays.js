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
