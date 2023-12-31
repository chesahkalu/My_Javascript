

// constructor functions are functions that create new objects. They define properties and behaviors that will belong to the new object.
// Think of them as a blueprint for the creation of new objects.
// Here is an example of a constructor function:

function Bird() {         // contructors are defined with a capitalized name to distinguish them from other functions that are not constructors
    this.name = "Albert"; // this keyword sets the properties of the object that will be created by the constructor function.
    this.color = "blue";
    this.numLegs = 2;
  }

// To use a constructor function we use the new keyword to create a new instance of the object it defines.
// This tells JavaScript to create a new instance of Bird called blueBird with all the properties of Bird.

let blueBird = new Bird(); 
// The properties are assigned to the new instance of the object. and can be called with dot notation.

// Constructors can have parameters, which are used to create unique objects. This way we can pass values into our constructor function when creating new objects.
// The constructur can then use the arguments passed in to initialize the object.

function Bird1(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
  }

// Now we can pass in arguments when creating new objects.

let cardinal = new Bird1("Bruce", "red", 2);

// This object becomes an instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2.

cardinal instanceof Bird1; // instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.
