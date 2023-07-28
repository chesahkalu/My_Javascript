// Functions can be imported from one file and exported into another file.

import { uppercaseString, lowercaseString } from './4-export_functions.mjs'; //How to import functions. (./) is used to locate the file in the same directory and (../) is used to locate the file in the parent directory.

console.log(uppercaseString("hello"));

// with * we can import everything from a file as an object.
import * as haha from './4-export_functions.mjs'; // this will import all the functions from the file as an object called haha.

// the functions can be accessed like any other object property

console.log(haha.add(1, 2)); // 3
console.log(haha.subtract(1, 2)); // -1


import thatMultiply from './4-export_functions.mjs'; //How to import default functions. No need to use curly braces. The name of the function can be changed.