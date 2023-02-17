//Getting both values of transaction and balance
const balanceElement = document.getElementById("balance");
const transactionElement = document.getElementById("transaction");
const transactionNameElement = document.getElementById("transaction-name");
//intiating balance to 0
let balance = 0;
let transactionHistory = [];

//updating the balance after pressing the submit button
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const transaction = parseFloat(transactionElement.value);
  const transactionName = transactionNameElement.value;
  if (balance + transaction < 0) {
    alert("Transaction amount exceeds current balance. Transaction canceled.");
  } else {
    balance += transaction;
    balanceElement.textContent = balance;
    transactionHistory.push({ name: transactionName, amount: transaction });
    displayTransactionHistory();
    //Updating the transaction box to be empty after the submision
    transactionElement.value = "";
    transactionNameElement.value = "";
  }
});

function displayTransactionHistory() {
  const transactionList = document.getElementById("transaction-list");
  transactionList.innerHTML = "";
  transactionHistory.slice().reverse().forEach(transaction => { 
    const transactionItem = document.createElement("li");
    const transactionName = transaction.name ;
    const transactionAmount = transaction.amount.toFixed(2);
    transactionItem.textContent = `${transactionName}: $${transactionAmount}`;
    transactionList.appendChild(transactionItem);
  });
}
