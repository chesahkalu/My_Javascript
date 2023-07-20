// You can interate through an array using a for loop, acccessing each index of the array and its value at that index.
// Note the myArr.length property, which returns the number of elements in the array, also consider the index of the last element in the array is one less than the length of the array.


const myArr = [2, 3, 4, 5, 6];
var total = 0;

for(let k = 0; k < myArr.length; k++){
  total = total + myArr[k];
}

console.log(total); // 20

// Multi-dimensional arrays can be accessed using nested for loops, where the outer loop is used to access the outer array and the inner loop is used to access the inner array.

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