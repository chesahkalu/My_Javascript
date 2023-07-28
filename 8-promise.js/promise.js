
/*JavaScript Promises are a powerful concept used to handle asynchronous operations and provide a more structured way of dealing with callbacks. 
Promises help manage the flow of asynchronous code, making it easier to write, read, and debug asynchronous tasks in JavaScript.

A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. 
It is a placeholder for the result of an asynchronous operation that may not have completed yet. Promises can be in one of three states: pending, fulfilled, or rejected.

Pending: The initial state when the Promise is created and is neither fulfilled nor rejected.
Fulfilled: The state of a Promise when the asynchronous operation is completed successfully, and the promised value is available.
Rejected: The state of a Promise when the asynchronous operation encounters an error or fails, and the reason for failure is available.*/


/*Creating a Promise:
To create a Promise, you use the Promise constructor, which takes a single argument: the executor function. The executor function has two parameters: resolve and reject. 
You use these parameters to either fulfill or reject the Promise.*/


const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., API call, reading a file, etc.)
  // If the operation is successful, call resolve(value).
  // If the operation fails, call reject(error).
});

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
     reject("Data not received");
    }
  });


/*Promise Chaining:
Promises can be chained to handle multiple asynchronous operations in sequence. This is achieved using the then method, 
which takes two optional callback functions: one for handling the fulfillment and another for handling the rejection.*/


myPromise
  .then((result) => {
    // Handle the fulfillment (success) here
  })
  .catch((error) => {
    // Handle the rejection (error) here
  });


/*Handling Multiple Promises:
When you need to handle multiple Promises simultaneously and wait for all of them to complete, you can use Promise.all(). 
It takes an array of Promises as input and returns a single Promise that fulfills with an array of all the resolved values when all the Promises are fulfilled.*/


const promise1 = someAsyncOperation1();
const promise2 = someAsyncOperation2();

Promise.all([promise1, promise2])
  .then((results) => {
    // Both promises fulfilled, and results contains an array of their values
  })
  .catch((error) => {
    // Handle errors from any of the promises
  });

/*Handling the First Resolved Promise:
If you have a group of Promises and only want to handle the one that resolves first, you can use Promise.race(). 
It takes an array of Promises and returns a Promise that fulfills or rejects as soon as any of the input Promises fulfill or reject.*/


Promise.race([promise1, promise2])
  .then((firstResult) => {
    // The first promise that resolves successfully
  })
  .catch((error) => {
    // Handle errors from the first resolved promise
  });

/*Conclusion:
Promises in JavaScript provide a structured way to work with asynchronous operations, making code more manageable and readable. 
By understanding the basics of Promises, you can handle complex asynchronous tasks and build more robust and efficient applications. 
Remember to handle errors properly to ensure your code behaves predictably and handles failures gracefully. Asynchronous programming using Promises is a crucial skill for modern JavaScript developers.*/