/*
1. add event listener to the withdraw button
2. get withdraw amount from the withdraw input field
2.5. convert string withdraw amount ro a number type
3. clear the withdraw input field after getting the value
4. get the previous withdraw total
5. calculate new withdraw total and set the value to the withdraw total
6. get previous balance
7. calculate the new balance and set the value to the balance total element
*/

// step1
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //console.log("clicked");

  // step 2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  // step 2.5
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step 3
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("please provide a valid number");
    return;
  }

  // step 4
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step 6
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   clear the withdraw field
  withdrawField.value = "";

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Balance not enough");
    return;
  }

  // step 5
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 7
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
