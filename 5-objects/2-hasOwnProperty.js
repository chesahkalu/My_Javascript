// you can use the hasOwnProperty() method to check if that property name exists on that object.
// you can also the "in" operator to check if that property name exists on that object.

// 1. Using the hasOwnProperty() method

const person = {
    name: "John",
    age: 30,
  };
  
  console.log(person.hasOwnProperty("name")); // Output: true
  console.log(person.hasOwnProperty("address")); // Output: false

// 2. Using the "in" operator

const car = {
    brand: "Toyota",
    model: "Camry",
  };
  
  console.log("brand" in car); // Output: true
  console.log("color" in car); // Output: false
  


// A function that checks if an object has a specific property, taking the object and the property name as arguments.(object can be undeclared as a variable, being an annonymous object: which is an object without a name defined inline e.g. {name: "John", age: 30})
function checkObj(obj, checkProp) {
    
    if (obj.hasOwnProperty(checkProp)){  //can be written as : if (obj.hasOwnProperty(checkProp === true)){
      return (obj[checkProp]);           // using bracket notation to access the property value as we dont know the property name ahead of time
    } else return "Not Found";
  
  }

    