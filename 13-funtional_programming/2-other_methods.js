//One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.
// Pass arguments to avoid external dependence in a function. If a function depends only on the arguments passed into them, and not on any global object or variable, then the function is easier to test and debug.

/*  As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function.
Functions are considered first class objects in JavaScript, which means they can be used like any other object.
They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple examples:
*/

// Map method : The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

const array1 = [1, 2, 3, 4, 5];




// Using map method to extract data from an array:
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name); //This is a variable that is assigned the value of the users array with the map method called on it with the user parameter passed in and the user.name property returned.

const names2 = users.map(function (user) { //This is a variable that is assigned the value of the users array with the map method called on it with the user parameter passed in and the user.name property returned.
    return user.name;
});


// Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.
Array.prototype.myMap = function(callback) { //This is a method that is assigned the value of the myMap function with the callback parameter passed in.
    const newArray = []; //This is a variable that is assigned the value of an empty array.
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {     //This is a for loop that will run as long as the value of i is less than the length of the array.
      newArray.push(callback(this[i], i, this)); //This is a method that adds the value of the callback function with the this[i], i, and this parameters passed in to the newArray array.
    }
    // Only change code above this line
    return newArray;
  };

// Filter method : The filter method returns a new array containing all elements of the calling array for which the provided filtering function returns true.

const users2 = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersUnder30 = users2.filter(user => user.age < 30); //This is a variable that is assigned the value of the users2 array with the filter method called on it with the user parameter passed in and the user.age property returned.

const usersUnder302 = users2.filter(function (user) { //This is a variable that is assigned the value of the users2 array with the filter method called on it with the user parameter passed in and the user.age property returned.
    return user.age < 30;
});

// Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
Array.prototype.myFilter = function(callback) { //This is a method that is assigned the value of the myFilter function with the callback parameter passed in.
    const newArray = []; //This is a variable that is assigned the value of an empty array.
    for (let i = 0; i < this.length; i++) { //This is a for loop that will run as long as the value of i is less than the length of the array.
      if (Boolean(callback(this[i], i, this)) === true) { //This is an if statement that checks if the value of the callback function with the this[i], i, and this parameters passed in is true.
        newArray.push(this[i]); //This is a method that adds the value of the this[i] parameter to the newArray array.
      }
    }
    return newArray; //This is a return statement that returns the newArray array.
  };


  // Slice method : The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array.

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2)); // expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1)); // expected output: Array ["camel", "duck"]

    console.log(animals.slice(-2, -1)); // expected output: Array ["duck"]


   // Slice can be used to remove elements from an array instead of splice but it does not mutate the original array, it returns a new one

    function nonMutatingSplice(cities) { //This is a function that is assigned the value of the nonMutatingSplice function with the cities parameter passed in.
        // Only change code below this line
        return cities.slice(0, 3); //This is a return statement that returns the value of the cities array with the slice method called on it with the 0 and 3 parameters passed in.
    }

   // Concat method : The concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    const array2 = ['a', 'b', 'c'];
    const array3 = ['d', 'e', 'f'];
    const array4 = array2.concat(array3);
    console.log(array4); // expected output: Array ["a", "b", "c", "d", "e", "f"]

    // Sort method : The sort method sorts the elements of an array according to the callback function.

    function ascendingOrder(arr) { //This is a function that is assigned the value of the ascendingOrder function with the arr parameter passed in.
        return arr.sort(function(a, b) { //This is a return statement that returns the value of the arr array with the sort method called on it with the a and b parameters passed in.
            return a - b; //This is a return statement that returns the value of the a parameter minus the value of the b parameter.
        });
    }

    ascendingOrder([1, 5, 2, 3, 4]); //This is a function call that passes the [1, 5, 2, 3, 4] array into the ascendingOrder function.

    function reverseAlpha(arr) { //This is a function that is assigned the value of the reverseAlpha function with the arr parameter passed in.
        return arr.sort(function(a, b) { //This is a return statement that returns the value of the arr array with the sort method called on it with the a and b parameters passed in.
            return a === b ? 0 : a < b ? 1 : -1; //This is a return statement that returns the value of the a parameter strictly equal to the value of the b parameter ? 0 : a less than the value of the b parameter ? 1 : -1.
        });
    }

    reverseAlpha (['l', 'h', 'z', 'b', 's']); //This is a function call that passes the ['l', 'h', 'z', 'b', 's'] array into the reverseAlpha function. will return ['z', 's', 'l', 'h', 'b']

    // Return a Sorted Array Without Changing the Original Array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) { //This is a function that is assigned the value of the nonMutatingSort function with the arr parameter passed in.
  return [].concat(arr).sort(function(a, b) { //This is a return statement that returns the value of an empty array with the concat method called on it with the arr parameter passed in and the sort method called on it with the a and b parameters passed in.
    return a - b;
  });
}
nonMutatingSort(globalArray);

    /* . JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. 
    Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, 
    normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: 
    If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. 
    If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. 
    If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.*/


    // Split method : The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. 
    // For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

    


    /* Complete the code for the squareList function using any combination of map(), filter(), and reduce(). 
    The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
    An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function: */

const squareList = (arr) => {
    // Only change code below this line
    return arr
            .filter(num => num > 0 && num % parseInt(num) === 0)
            .map(num => Math.pow(num, 2));
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);