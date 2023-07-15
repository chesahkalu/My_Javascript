//The switch statement provides a concise way to handle multiple cases based on a single expression. 
//A switch statement compares the value to the case statements which define various possible values, and will run from the first matched case value until a break is encountered.
//It's important to remember to use break statements to avoid falling through to the next case unintentionally.
//If none of the case values match the expression value, the default block is executed 

switch (expression) {
    case value1:
      // Code to be executed if the expression matches value1
      break;
    case value2:
      // Code to be executed if the expression matches value2
      break;
    // Add more cases as needed
    default:
      // Code to be executed if the expression doesn't match any case
  }


  switch (fruit) {
    case "apple":
      console.log("The fruit is an apple");
      break;
    case "orange":
      console.log("The fruit is an orange");
      break;
  }

  let day = 2;
  let dayName;
  
  switch (day) {
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    default:
      dayName = 'Unknown';
  }
  
  console.log(dayName); // Output: Tuesday

//In this example, multiple cases ('apple' and 'cherry') share the same code block. If fruit is either 'apple' or 'cherry', the code sets fruitColor to 'red'.
  let fruit = 'apple';
  let fruitColor;
  
  switch (fruit) {
    case 'apple':
    case 'cherry':
      fruitColor = 'red';
      break;
    case 'banana':
      fruitColor = 'yellow';
      break;
    case 'orange':
      fruitColor = 'orange';
      break;
    default:
      fruitColor = 'unknown';
  }
  
  console.log(fruitColor); // Output: red

  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
        case 1:
        case 2:
        case 3:
            answer= "Low";
            break;
  
        case 4:
        case 5:
        case 6:
            answer= "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer= "High";
            break;
        }
    // Only change code above this line
        return answer;
  
  sequentialSizes(1);

  }


  