/* callbacks are functions that are passed into other functions as arguments. 
The function that it is passed into is called the higher order function.
First class functions are functions that can be assigned to variables, passed into other functions, and returned from other functions.(all functions in JS are first class functions)
The higher order function will execute the callback function at some point.
When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda. The lambda is a nameless(anonymous) function that can be used as a callback.
Callbacks are often used to continue code execution after an asynchronous operation has completed.
*/

// // Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
// // You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.
// // The functions that take a callback as an argument are called higher order functions.  When the higher order function is invoked it will execute the callback function that was passed in.
// // Callback functions can be anonymous functions or named functions.
// // The functions that take a callback as an argument are called higher order functions.  When the higher order function is invoked it will execute the callback function that was passed in.


const prepareGreenTea = () => 'greenTea'; //This is an arrow function that returns the string greenTea.

const prepareBlackTea = () => 'blackTea'; //This is an arrow function that returns the string blackTea.

const getTea = (prepareTea, numOfCups) => { //This is an arrow function that returns an array of tea cups.
    const teaCups = [];  //This is an empty array.

    for (let cups = 1; cups <= numOfCups; cups += 1) { //This is a for loop that will run as long as the number of cups is less than or equal to the number of cups passed in.
        const teaCup = prepareTea(); //This is a variable that is assigned the value of the prepareTea function.
        teaCups.push(teaCup);   //This is a method that adds the value of the teaCup variable to the teaCups array.
    }

    return teaCups; //This is a return statement that returns the teaCups array.
}

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); //This is a variable that is assigned the value of the getTea function with the prepareGreenTea function and the number 27 passed in.
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); //This is a variable that is assigned the value of the getTea function with the prepareBlackTea function and the number 13 passed in.

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC); //This is a console.log that prints the values of the tea4GreenTeamFCC and tea4BlackTeamFCC variables.


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