/*In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname. 

Strokes	                Return
    1	            "Hole-in-one!"
<= par - 2	            "Eagle"
par - 1	                "Birdie"
par	                    "Par"
par + 1             	"Bogey"
par + 2	            "Double Bogey"
>= par + 3	            "Go Home!"

MEANING : for every hole there is a number strokes you are expected to make in order to complete the play into the hole(par), for each number of plays you make compared to the expected par is a nickname...
          if you make just one stroke and get the hole you have a "Hole-in-one"
          if you make one stroke and miss the whole, then make a second stroke but still remain two or more strokes before equaling par you have made an "Eagle"
          if you make as many strokes and almost getting to the number of the par only to be just 1 stroke equal to the par you have made a "Birdie"
          if you make the number of strokes that is expected of you, you are said to have made a "par".
          if you make 1 more strokes than the expected par, you have made a "Bogey"
          if you make 2 more strokes than the expected par, you have made a "Double Bogey"
          if you make 3 or more strokes than the expected par, you have made a "Go Home!"
*/

// A function that takes a par and strokes as arguments and returns the correct string according to the stroke made in relation to the par.
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

  if (strokes == 1){ // if strokes is 1, use == because we are comparing values not data types, it could be a string or number
    return "Hole-in-one!";
  }
  else if(strokes <= (par - 2)){ // if strokes is less than or equal to par - 2
    return "Eagle";
  }
  else if (strokes == (par -1)){ //1 more stroke to go
    return "Birdie";
  }
  else if (strokes == par){  //strokes is equal to par
    return "Par";
  }
  else if (strokes == (par + 1)){ //1 more stroke than par
    return "Bogey";
  }
  else if (strokes == (par + 2)){ //2 more strokes than par
    return "Double Bogey";
  }

  else if (strokes >= (par + 3)){ //3 or more strokes than par
    return "Go Home!";
  }

  return "Change Me";
}

console.log(golfScore(5, 4));