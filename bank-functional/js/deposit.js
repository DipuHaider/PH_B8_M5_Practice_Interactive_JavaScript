/*
1. add event listener/handler to the deposit button
2. get deposit amount from the deposit input field
2.5. convert string deposit amount ro a number type
3. clear the deposit input field after getting the value
4. get the previous deposit total
5. calculate new deposit total and set the value to the deposit total
6. get current balance
7. calculate the new balance and set the value to the balance total element
*/

// step 1
document.getElementById("deposit-btn").addEventListener("click", function () {
  //console.log("clicked");

  //   // step 2
  //   const depositField = document.getElementById("deposit-field");
  //   const newDepositAmountString = depositField.value;
  //   // Step 2.5
  //   const newDepositAmount = parseFloat(newDepositAmountString);
  //   // step 3
  //   depositField.value = "";

  const newDepositAmount = getInputFieldValueById("deposit-field");

  //   // step 4
  //   const depositTotalElement = document.getElementById("deposit-total");
  //   const previousDepositTotalString = depositTotalElement.innerText;
  //   const previousDepositTotal = parseFloat(previousDepositTotalString);

  const previousDepositTotal = getTextElementValueById("deposit-total");

  // step 5
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //   depositTotalElement.innerText = newDepositTotal;
  setTextElementValueById("deposit-total", newDepositTotal);

  //   // step 6
  //   const balanceTotalElement = document.getElementById("balance-total");
  //   const previousBalanceTotalString = balanceTotalElement.innerText;
  //   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const previousBalanceTotal = getTextElementValueById("balance-total");

  // step 7
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  //balanceTotalElement.innerText = newBalanceTotal;
  setTextElementValueById("balance-total", newBalanceTotal);
});
