// While loop : runs while a specified condition is true and stops once that condition is no longer true.

const myArray = [];

let i = 5

while (i >= 0){
  myArray.push(i);
  i--;
}

// For loop : runs for a specific number of times and stops once that number of times is reached.
// Declared with three optional expressions separated by semicolons: for ([initialization]; [condition]; [final-expression])
// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.
// The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

const herArray = [];

for (let k = 0; k <= 10; k +=2){  //
  herArray.push(k);
}
console.log(herArray);
