// You can interate through an array using a for loop, acccessing each index of the array and its value at that index.
// Note the myArr.length property, which returns the number of elements in the array, also consider the index of the last element in the array is one less than the length of the array.


const myArr = [2, 3, 4, 5, 6];
var total = 0;

for(let k = 0; k < myArr.length; k++){
  total = total + myArr[k];
}

console.log(total); // 20

// Multi-dimensional arrays can be accessed using nested for loops, where the outer loop is used to access the outer array and the inner loop is used to access the inner array.

const arr = [
    [1, 2], [3, 4], [5, 6]
  ];

function multiplyAll(arr) {
    var product = 1;
    for(let i = 0; i < arr.length; i++){  // The outer loop access the outer array,
        for(let j = 0; j < arr[i].length; j++){ // The inner loop accesses each sub-array element in turn. 
        console.log(arr[i][j]);
        product = product * arr[i][j];
        }
    }
    return product;
}


/*We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.*/

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  
  
  
  
  lookUpProfile("Akira", "likes");