document.getElementById("withdraw-btn").addEventListener("click", function () {
  //console.log("clicked");
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotalElement.innerText = currentBalanceTotal;

  //   clear the withdraw field
  withdrawField.value = "";
});
