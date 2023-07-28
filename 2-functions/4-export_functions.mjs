// Functions can be exported from one file and imported into another file.
// To establish this "two-way street" between files, we must first export a function in order to make it available for import into another file.
// Also the files names must end with .mjs which indicates that the file is a module.

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

// Export default
// Export default is used to export a single value from a file. It is also used to create a fallback value for a file or module. Meaning that if nothing is imported from a file, the default exported value will be used.
// With export default you can use any name when importing the value. In fact, you can import it with a name that is different from the exported name. It is the default value when you import the module.
// Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file.
// The dafault value can also be exported without a name.
// Additionally, you cannot use export default with var, let, or const. Meaning that you cannot export a variable declaration. You can only export a value directly.

export default function (x, y) { //How to export default functions. No need to name the function.
    return x * y;
  }


