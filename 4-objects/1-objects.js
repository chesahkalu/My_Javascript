/*Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
In JavaScript, objects can be used as lookup tables or dictionaries to store and retrieve values based on keys.
Using objects for lookup can be beneficial when you have a set of related data that you want to access efficiently based on specific keys. It allows you to organize and access the data in a structured manner, 
making it easier to retrieve information associated with a particular key.

Here's a sample cat object:  */

const cat = {

    "name": "Whiskers", // name is a property of cat object and Whiskers is the value of the property
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };
  
  
  // There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
  
  // Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
  
  const myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  
  const prop1val = myObj.prop1;
  const prop2val = myObj.prop2;
  
  console.log(prop1val); // val1
  
  // Bracket notation is what you use when you don't know ahead of time the name of the property you're trying to access(like in a function), or when the name of the property is stored as a variable.
  // Also, you can use bracket notation to access a property which has a space in its name***. However, you must use bracket notation if the property name is numbers.
  
  const myObj1 = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  
  myObj1["Space Name"]; // Kirk
  myObj1['More Space']; // Spock
  
  const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  const entreeValue = testObj["an entree"];
  const drinkValue = testObj["the drink"];
  
  // Accessing Object Properties with Variables
  // Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
  // Here is an example of using a variable to access a property:
  
  const dogs = {
    Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed); // "Doberman"
  
  /*In this example, we have an object called dogs with different dog names as properties and their respective breeds as values. We also have a variable myDog which stores the name of a specific dog.
  By using dogs[myDog], we can access the property value in the dogs object that corresponds to the value stored in myDog. In this case, myDog is "Hunter", so dogs[myDog] retrieves the value "Doberman".
  It's important to note that when using the variable to access the property, we don't enclose the variable name in quotes. This is because we want to use the value stored in the variable, not the variable name itself.*/
  
  
  // Updating Object Properties: Both dot and bracket notation can be used to update the value of an object's property.
  
  const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDog.name = "Happy Camper"; // Dot notation
  ourDog["name"] = "Happy Camper"; // Bracket notation
  
  // Add New Properties to a JavaScript Object: You can add new properties to existing JavaScript objects the same way you would modify them.
  
  ourDog.bark = "bow-wow"; // Dot notation
  ourDog["bark"] = "bow-wow"; // Bracket notation
  
  // Delete Properties from a JavaScript Object: You can delete properties from objects like this:
  
  delete ourDog.bark; // Dot notation
  delete ourDog["bark"]; // Bracket notation
  
  console.log(ourDog)







  //Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
  //Consider the following ES5 code:
  const user = { name: 'John Doe', age: 34 };

  const name = user.name; // name = 'John Doe'
  const age = user.age; // age = 34

  //Here's an equivalent assignment statement using the ES6 destructuring syntax:
  const { nameAgain, ageAgain } = user;
  // nameAgain = 'John Doe', ageAgain = 34
  //Here, the nameAgain and ageAgain variables will be created and assigned the values of their respective values from the user object.

  //Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.
  const { name: userName, age: userAge } = user;
  // userName = 'John Doe', userAge = 34
  //You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.


  //You can destructure nested objects into variables.
  //Consider the following code:
  const user1 = {
    johnDoe: {
      age: 34,
      email: 'johndoe@gmail.com'
    }
  };
  //Here's how to extract the values of object properties and assign them to variables with the same name:
  const { johnDoe: { Aage, email }} = user1;
  //And here's how you can assign an object properties' values to variables with different names:
  const { johnDoe: { age: AuserAge, email: userEmail }} = user1;
  //Here, the johnDoe object's values for the age and email properties are extracted and assigned to the corresponding variables.


  //You can destructure arrays as well.
 
  const [a, b] = [1, 2, 3, 4, 5, 6];
  console.log(a, b); // 1, 2

  //The variable a is assigned the first value of the array, and b is assigned the second value of the array.
  //We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
  const [a1, b1,,, c1] = [1, 2, 3, 4, 5, 6];
  console.log(a1, b1, c1); // 1, 2, 5

  let a2 = 8, b2 = 6; // Swapping values
  [a2, b2] = [b2, a2]; // a2 = 6, b2 = 8.