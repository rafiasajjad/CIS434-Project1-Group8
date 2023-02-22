// Getting both values of transaction and balance
const balanceElement = document.getElementById("balance");
const transactionElement = document.getElementById("transaction-amount");
const transactionNameElement = document.getElementById("transaction-name");

// Initializing balance to 0 and transaction history to empty array
let balance = 0;
let transactionHistory = [];

// Retrieve transaction history from local storage if available
if (localStorage.getItem("transactionData")) {
  transactionHistory = JSON.parse(localStorage.getItem("transactionData"));
  balance = transactionHistory.reduce((name, transaction) => {
    return name + transaction.amount;
  }, 0);
  balanceElement.textContent = balance.toFixed(2);
  displayTransactionHistory();
}

// Updating the balance after pressing the submit button
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const transaction = parseFloat(transactionElement.value);
  const transactionName = transactionNameElement.value;
  if (balance + transaction < 0) {
    alert("Transaction amount exceeds current balance. Transaction canceled.");
  } else {
    balance += transaction;
    balanceElement.textContent = balance.toFixed(2);
    transactionHistory.push({ name: transactionName, amount: transaction });
    displayTransactionHistory();
    // Store transaction history in local storage
    localStorage.setItem("transactionData", JSON.stringify(transactionHistory));
    // Updating the transaction box to be empty after the submission
    transactionElement.value = "";
    transactionNameElement.value = "";
  }
});

function displayTransactionHistory() {
  const transactionList = document.getElementById("transaction-list");
  transactionList.innerHTML = "";
  transactionHistory.slice().reverse().forEach((transaction) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("th");
    const amountCell = document.createElement("th");
    const transactionName = transaction.name || "Unnamed Transaction";
    const transactionAmount = transaction.amount.toFixed(2);
    nameCell.textContent = transactionName;
    amountCell.textContent = `$${transactionAmount}`;
    if (transactionAmount >= 0) {
      amountCell.classList.add("positive");
    } else {
      amountCell.classList.add("negative");
    }
    row.appendChild(nameCell);
    row.appendChild(amountCell);
    transactionList.appendChild(row);
  });
}
//Clearing the transaction history in local storage
const clearHistoryButton = document.getElementById("clear-history");
clearHistoryButton.addEventListener("click", function() {
  localStorage.removeItem("transactionData");
  transactionHistory = [];
  balance = 0;
  balanceElement.textContent = balance.toFixed(2);
  displayTransactionHistory();
});
