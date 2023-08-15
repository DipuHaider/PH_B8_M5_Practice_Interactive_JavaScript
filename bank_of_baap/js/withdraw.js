document.getElementById("withdraw-btn").addEventListener("click", function () {
  //console.log("clicked");
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //   clear the withdraw field
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("please provide a valid number");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   clear the withdraw field
  withdrawField.value = "";

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Balance not enough");
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotalElement.innerText = currentBalanceTotal;
});
