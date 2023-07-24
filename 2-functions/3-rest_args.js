/*With the rest parameter, you can create functions that take a variable number of arguments. 
These arguments are stored in an array that can be accessed later from inside the function.*/



function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // prints You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // prints You have passed 4 arguments.


//The rest parameter eliminates the need to use the arguments object and allows us to use array methods on the array of parameters passed to the function howMany.

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }