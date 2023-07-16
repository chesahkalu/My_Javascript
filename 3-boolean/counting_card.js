/* You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the 
global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet
if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet */

let count = 0;

function cc(card) {
  // Only change code below this line
  
switch (card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count += 1;
  break;
  case 7:
  case 8:
  case 9:
  count = count;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count -= 1;
  break;
}

let reply = "";

if (count < 0){
  reply = count + " Hold";
} else if (count === 0){ //
  reply = count + " Hold"
} else if (count > 0) { 
  reply = count + " Bet"
}


  console.log(reply);
  return reply;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/*The switch statement checks the value of card and updates the count variable accordingly:

If card is 2, 3, 4, 5, or 6, it adds 1 to the count.
If card is 7, 8, or 9, the count remains the same.
If card is 10, 'J', 'Q', 'K', or 'A', it subtracts 1 from the count.
After updating the count, the function determines the reply based on the current value of count. If count is less than 0, it sets reply to count + " Hold". If count is equal to 0, it sets reply to "Hold". Otherwise, it sets reply to count + " Bet".

The cc function is then called with different card values (2, 3, 7, 'K', 'A') to simulate card counting. Each call to cc updates the count and returns the corresponding reply.*/