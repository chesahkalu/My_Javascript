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



// Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

// A function that adds all of the own properties of canary to the array ownProps:
let canary = new Bird1("Tweety", "yellow", 2);
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "color", "numLegs" ]

// Prototype properties are shared among ALL instances of Bird. NumLegs are same for all birds, since it is probably same value for all instances,Excluding it from the constructor function and defining it seperately is more efficient.
// This will save memory space,This can be done by adding it to the Bird prototype.


function Bird2(name) {
    this.name = name; // own property
    }

Bird2.prototype.numLegs = 2; // prototype property

let duck3 = new Bird2("Donald"); // duck3 has own property name as Donald and prototype property numLegs as 2.


// Funtion to find own porperties and prototype properties of an object:
let ownProps2 = [];
let prototypeProps = [];

for (let property in duck3) {
  if(duck3.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps2); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

// More prototype properties can be added to a constructor function at once by adding them to the constructor's prototype object.

Bird2.prototype = {
    constructor: Bird2, // It is important to define the constructor property. Otherwise instances of Bird2 would show the prototype as undefined.
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

// Constructor property is a reference to the constructor function that created the instance. And can be accessed with .constructor. Both for own and prototype properties.
// It can be useful to check which constructor function created the instance, especially if you extend the constructor function to be used by other objects.

function Dog(name) {
    this.name = name;
  }

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }
// joinDogFraternity function checks if an object constructor is Dog by comparing its constructor property to Dog. If true, it returns true, else false. This way, if the constructor function is changed, the joinDogFraternity function will still work.


// an object inherits its prototype directly from the constructor function that created it. You can show this relationship with the isPrototypeOf method:

Bird2.prototype.isPrototypeOf(duck3); // returns true

// All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
// Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird2.prototype); // returns true


// Closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.
// A closure is a function having access to the parent scope, even after the parent function has closed (returned). This means a closure can remember and access variables and arguments of its outer function even after the function has finished.
// In JavaScript, closures are created every time a function is created, at function creation time and not at function execution time. It is used to create private variables and methods and to avoid polluting the global scope.

function makeFunc() {
    let name = "Mozilla"; // name is a local variable created by makeFunc.
    function displayName() { // displayName() is the inner function, a closure.
      console.log(name); // displayName() uses variable declared in the parent function.
    }
    return displayName;
  }




let myFunc = makeFunc(); /* myFunc is a reference to the instance of the function displayName created when makeFunc is run. 
The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. 
For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to console.log.*/

myFunc(); // "Mozilla" is printed to the console, the value of name.

function Birdy() { // A Birdy constructor private variable
    let hatchedEgg = 10; // private variable and can only be accessed by public methods below.
    this.getHatchedEggCount = function() { // publicly available method that a bird object can use
      return hatchedEgg; // returns value of private variable
    };
  }
let ducky = new Birdy(); // creates a new instance of Birdy