// Functions can be exported from one file and imported into another file.

export const subtract = (x, y) => { //How to export functions.
    return x - y;
    }

const add = (x, y) => {
    return x + y;
    }   

export { add }; //Another way to export functions.

const uppercaseString = (string) => {
    return string.toUpperCase();
  }

const lowercaseString = (string) => {
    return string.toLowerCase();
    }


export { uppercaseString , lowercaseString}; //How to export multiple functions.