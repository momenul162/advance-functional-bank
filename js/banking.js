function getInputAmount(inputId) {
  // input deposit amount
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const inputAmountValue = parseFloat(inputAmountText);
  // cleat input field
  inputField.value = "";
  return inputAmountValue;
}

function updateAmountField(updateFieldId, amount) {
  const totalAmount = document.getElementById(updateFieldId);
  const totalAmountText = totalAmount.innerText;
  const previousAmount = parseFloat(totalAmountText);
  totalAmount.innerText = previousAmount + amount;
}

function getCurrentBalance() {
  const totalBalance = document.getElementById("total-balance");
  const previousBalanceText = totalBalance.innerText;
  const balanceTotal = parseFloat(previousBalanceText);
  return balanceTotal;
}

function unpdateBalance(amount, isAdd) {
  const totalBalance = document.getElementById("total-balance");
  // const previousBalanceText = totalBalance.innerText;
  // const balanceTotal = parseFloat(previousBalanceText);
  const balanceTotal = getCurrentBalance();
  if (isAdd == true) {
    totalBalance.innerText = balanceTotal + amount;
  } else {
    totalBalance.innerText = balanceTotal - amount;
  }
}

// handle deposit
document.getElementById("deposit-button").addEventListener("click", function () {
  const depositAmountTotal = getInputAmount("deposit-amount");
  if (depositAmountTotal > 0) {
    updateAmountField("total-deposit", depositAmountTotal);
    unpdateBalance(depositAmountTotal, true);
  }
  // input deposit amount
  // const depositAmount = document.getElementById("deposit-amount");
  // const depositAmountText = depositAmount.value;
  // const depositAmountTotal = parseFloat(depositAmountText);
  // const totalDeposit = document.getElementById("total-deposit");
  // const previousDepositText = totalDeposit.innerText;
  // const previousDepositAmount = parseFloat(previousDepositText);
  // // add deposit
  // totalDeposit.innerText = previousDepositAmount + depositAmountTotal;

  // Add to main balance
  // const totalBalance = document.getElementById("total-balance");
  // const previousBalanceText = totalBalance.innerText;
  // const previousBalanceTotal = parseFloat(previousBalanceText);

  // totalBalance.innerText = previousBalanceTotal + depositAmountTotal;

  // cleat input field
  // depositAmount.value = "";
});

// handle withdraw
document.getElementById("withdraw-button").addEventListener("click", function () {
  const withdrawAmountTotal = getInputAmount("withdraw-amount");
  const currentBalance = getCurrentBalance();
  if (withdrawAmountTotal > 0 && withdrawAmountTotal < currentBalance) {
    updateAmountField("total-withdraw", withdrawAmountTotal);
    unpdateBalance(withdrawAmountTotal, false);
  }
  if (withdrawAmountTotal > currentBalance) {
    console.log("Insufficient balance");
  }
  // input withdraw amount
  // const withdrawAmount = document.getElementById("withdraw-amount");
  // const withdrawAmountText = withdrawAmount.value;
  // const withdrawAmountTotal = parseFloat(withdrawAmountText);
  // const totalWithdraw = document.getElementById("total-withdraw");
  // const previouslWithdrawText = totalWithdraw.innerText;
  // const previousWithdrawTotal = parseFloat(previouslWithdrawText);
  // totalWithdraw.innerText = previousWithdrawTotal + withdrawAmountTotal;

  // Add to main balance
  // const totalBalance = document.getElementById("total-balance");
  // const previousBalanceText = totalBalance.innerText;
  // const previousBalanceTotal = parseFloat(previousBalanceText);
  // totalBalance.innerText = previousBalanceTotal - withdrawAmountTotal;
});
