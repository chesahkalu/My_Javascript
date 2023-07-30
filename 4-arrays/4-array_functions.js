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
  