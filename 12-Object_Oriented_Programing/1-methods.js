//Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts.
// Here's an example using these concepts to create a duck object:

let duck = {
    name: "Aflac",
    numLegs: 2
  };

// This duck object has two property/value pairs: a name of Aflac and a numLegs of 2.
// Property names are strings. The values can be any data type, like strings, numbers, booleans, arrays, functions, or other objects.

// Objects can have a special type of property, called a method.
// Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

let duck1 = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck1.name + ".";}
  };
  duck1.sayName();

// The example adds the sayName method, which is a function that returns a sentence giving the name of the duck.
// Changing the variable name of the object would cause an issue with the method, to avoid this we use the this keyword.

let duck2 = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";} // this keyword refers to the object it belongs to
  };