/*Objects can also be nested inside other objects, but the object has to be declared unlike in the array where we use an annonymous object. This can get complex quickly, 
but the following example shows how an object can be nested in another object by assigning a key that contains another object: */

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        },
    "truck": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
    }
};


//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

var myCar = myStorage.car.inside["glove box"]; //maps
var myTruck = myStorage.truck.outside.trunk; //jack
var myTruck2 = myStorage["truck"]["outside"]["trunk"]; //jack
var  myCar2 = myStorage["car"].inside["glove box"]; //maps



// Accessing Nested Arrays
// Complex Objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

//the above would be an example of a complex object. It has 2 objects inside of it, each of which has an array nested within it. and it is basically an array of objects.

console.log(myPlants[1].list[1]); //pine