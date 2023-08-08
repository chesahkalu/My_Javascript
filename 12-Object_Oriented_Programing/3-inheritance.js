// Inheritance is a way to create a class as a child of another class. Instead of repeating the same code, you can inherit the properties and methods from a parent class.
// In JavaScript, an object can inherit the properties and methods of another object, by extending it. The object that gets inherited from is called the parent object, while the object that inherits is called the child object.

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// The eat method can be used by all instances of Animal. Now let's extend Animal to create a Bird child object.

let bird = Object.create(Animal.prototype); // bird inherits all properties and methods from Animal. Object.create() creates a new object, and sets bird's prototype to be the prototype of Animal.

bird.eat(); // prints "nom nom nom"
bird instanceof Animal; // returns true

/* Object.create() allows you to create a new object from an existing object, and optionally lets you specify the prototype of the newly created object. 
You can create a new instance of Bird by using Object.create() on Bird's prototype, and then defining any additional properties you want: */

let duck = Object.create(Bird.prototype); // creates a new object duck that inherits from Bird.prototype
duck.eat(); // prints "nom nom nom"

// To set the child's prototype to an instance of the parent, you use Object.create() with the parent prototype as an argument. For example,

Bird.prototype = Object.create(Animal.prototype); // Bird inherits all properties and methods from Animal. Now Bird.prototype.constructor is set to Animal.

let duck2 = new Bird("Donald"); // duck inherits all properties and methods from Animal.prototype. duck.constructor is set to Animal.

// If you have an instance let duck of Bird, you can call duck.constructor to find out which constructor was used to create duck. But duck.constructor is currently pointing to Animal. To fix this, you can manually set Bird's constructor property to the Bird object:

Bird.prototype.constructor = Bird; // Now duck.constructor will be set to Bird instead of Animal. This is important because duck and all instances of Bird should show that they were constructed by Bird and not Animal.






// Normally you can go ahead and add methods and properties to the protoype after inheritance. For example:

function Animal2() { }
Animal2.prototype.eat = function () {
    console.log("nom nom nom");
}

function Dog() { }

// Inherit all methods from Animal
Dog.prototype = Object.create(Animal2.prototype);

// Set the constructor property
Dog.prototype.constructor = Dog;

// Add a method to Dog's prototype
Dog.prototype.bark = function () {
    console.log("Woof!");
}

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

// Child objects can override inherited methods from the parent object. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. For example:
Dog.prototype.eat = function () {
    console.log("chew chew chew"); // overrides the eat method from Animal
}

/*As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane.
They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions. 

And to achieve this you can create a sperate method and then call it inside the constructor function. For example: */

let flyMixin = function (obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    }
}

// The flyMixin takes any object and gives it the fly method.

let bird2 = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};

flyMixin(bird2); // adds the fly method to bird
flyMixin(plane); // adds the fly method to plane
