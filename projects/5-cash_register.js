function checkCashRegister(price, cash, cid) {
    // Define currency values in cents
    const currencyUnit = {
      "PENNY": 1,
      "NICKEL": 5,
      "DIME": 10,
      "QUARTER": 25,
      "ONE": 100,
      "FIVE": 500,
      "TEN": 1000,
      "TWENTY": 2000,
      "ONE HUNDRED": 10000
    };
  
    // Calculate change due in cents
    let changeDue = Math.round((cash - price) * 100);
  
    // Calculate total cash in drawer in cents
    let totalCID = cid.reduce((total, curr) => total + curr[1] * 100, 0);
  
    // Check if change is insufficient
    if (changeDue > totalCID) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    // Check if change is exact
    if (changeDue === totalCID) {
      return { status: "CLOSED", change: cid };
    }
  
    // Calculate change to be given
    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      const coinName = cid[i][0];
      const coinValue = currencyUnit[coinName];
      const availableCoins = Math.floor(cid[i][1] * 100 / coinValue);
  
      if (changeDue >= coinValue) {
        const coinsToReturn = Math.min(Math.floor(changeDue / coinValue), availableCoins);
        const changeAmount = coinsToReturn * coinValue / 100;
        change.push([coinName, changeAmount]);
        changeDue -= coinsToReturn * coinValue;
      }
    }
  
    // Check if change is possible
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
  }
  
  // Test the checkCashRegister function
  console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]));

  
/* Here's how the checkCashRegister function works:

Define the currency values in cents using the currencyUnit object.

Calculate the change due in cents by converting the cash and price to cents and rounding.

Calculate the total cash in the drawer (totalCID) in cents by iterating through the cid array and summing up the coin/bill amounts.

Check if the change due is greater than the total cash in the drawer. If so, return { status: "INSUFFICIENT_FUNDS", change: [] }.

Check if the change due is equal to the total cash in the drawer. If so, return { status: "CLOSED", change: cid }.

Calculate the change to be given by iterating through the cid array in reverse order. For each coin/bill, calculate the number of coins/bills to return and the change amount. Update changeDue accordingly.

If there's any remaining change due, return { status: "INSUFFICIENT_FUNDS", change: [] }.

If all conditions are met, return { status: "OPEN", change: change } with the calculated change in coins and bills.

The function is tested with an example input using console.log(checkCashRegister(...));.

This function calculates the change to be given using the available coins and bills in the cash drawer while considering various scenarios.*/