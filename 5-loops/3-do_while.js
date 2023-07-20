// do...while ,will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
// Essentially, a do...while loop ensures that the code inside the loop will run at least once. 

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

console.log(ourArray); // [ 0, 1, 2, 3, 4 ]


// In the example above, the do...while loop will push the number 5 to myArray, and i will be equal to 6 when the condition is tested, so the loop will end, with 5 added to the array.
const anArray = []; 
let k = 5;

do {
  anArray.push(i);
  k++;
} while (i < 5);