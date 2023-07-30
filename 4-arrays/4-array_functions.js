// Function that takes an array and an element as arguments, and returns true or false depending on whether the element is present in the array.
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) != -1){
      return true;
    }
    else {return false;}
  }

// A function that returns a copy of an array using the spread operator and a number of copies to make
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
  }


// Function that interates through an array and appends any element in the array greater than 10 to a new array.
function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// Function that checks if an element is in the arrays withing an array, and if the element is not present, it returns a new array with the arrays that do not contain the element.
function filteredArray(arr, elem) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) { //Iterates through the array of arrays
      if (arr[i].indexOf(elem) == -1) { //Checks the array for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
      }
    }
    return newArr;
    console.log(newArr);
  }

  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9], [4, 5, 6]], 3));