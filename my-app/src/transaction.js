//Getting both values of transaction and balance
const balanceElement = document.getElementById("balance");
const transactionElement = document.getElementById("transaction");
const transactionHistory = document.getElementById("transaction-history");
//intiating balance to 0
let balance = 0;
//updating the balance after pressing the submit button
  const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const transaction = parseFloat(transactionElement.value);
      balance += transaction;
      balanceElement.textContent = balance;
      //Updating the transaction box to be empty after the submision 
      transactionElement.value = "";
      const newTransaction = document.createElement("li");
      newTransaction.textContent = `$${transaction}`;
      transactionHistory.appendChild(newTransaction);
  });