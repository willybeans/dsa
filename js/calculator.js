const drawerStatus = {
  "CLOSED": "CLOSED",
  "INSUFFICIENT_FUNDS": "INSUFFICIENT_FUNDS",
  "OPEN": "OPEN",
}

const monetaryValues = {
      "ONE HUNDRED": 100,
      TWENTY: 20,
      TEN: 10,
      FIVE: 5,
      ONE: 1,
      QUARTER: 0.25,
      DIME: 0.1,
      NICKEL: 0.05,
      PENNY: 0.01,
    };

const calculateTransaction = (change_in_drawer, cpd) => {
  const cashToReturn = [];
  let totalReturned = 0;
  for(let item of change_in_drawer){
    let change = 0;
    let dollarValue = monetaryValues[item[0]];
    if(dollarValue <= cpd) {
      while(cpd > 0 && item[1] > 0) {
        cpd -= dollarValue
        item[1] -= dollarValue
        change += dollarValue
      }
        totalReturned += change;
        cashToReturn.push([item[0], Number(change.toFixed(2))]);
    }
  }
  return {
    totalReturned,
    change: cashToReturn
    };
}

function getStatus(tid, rt, cpd) {
  const status = drawerStatus.OPEN;
  if (tid === rt) status = drawerStatus.CLOSED;
  if (cpd > rt) status = drawerStatus.INSUFFICIENT_FUNDS;
  return status;
}

function checkCashRegister(price, cash, cid) {
  const reverseCid = cid.reverse();
  const cashPriceDiff = cash - price;
  const totalInDrawer = cid.reduce((accumulator,currentvalue) => accumulator + currentvalue[1], 0)
  const result = calculateTransaction(reverseCid, cashPriceDiff);

  const status = getStatus(totalInDrawer, result.totalReturned, cashPriceDiff);
    console.log("test:", {
    status: status,
    change: status === drawerStatus.INSUFFICIENT_FUNDS ? [] : result.change
    });
    return {
    status: status,
    change: status === drawerStatus.INSUFFICIENT_FUNDS ? [] : result.change
    };
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
