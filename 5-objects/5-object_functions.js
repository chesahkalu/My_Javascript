// A function that checks if an object has a specific property, taking the object and the property name as arguments.(object can be undeclared as a variable, being an annonymous object: which is an object without a name defined inline e.g. {name: "John", age: 30})
function checkObj(obj, checkProp) {
    
    if (obj.hasOwnProperty(checkProp)){  //can be written as : if (obj.hasOwnProperty(checkProp === true)){
      return (obj[checkProp]);           // using bracket notation to access the property value as we dont know the property name ahead of time
    } else return "Not Found";
  
  }


 let users ={
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

  // function that counts the number of users that are online from the users object
  function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
  }

console.log(countOnline(users));

let users2 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

// function that returns an array of all the users names from the users2 object
  function getArrayOfUsers(obj) {
    return Object.keys(users2);
  }
  
  console.log(getArrayOfUsers(users2));




  let users3 = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    }
  };
  
  // function that adds a friend to the user's data object which is an array of friends, then returns that array
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(users3, "Pete"));