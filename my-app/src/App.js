import React, { useState } from 'react';
import './App.css';
import { updateBalance } from './transaction.js';

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Current balance: <span id="balance">{balance}</span></p>
        <form>
          <input type="text" id="transaction" />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const transaction = parseFloat(document.getElementById("transaction").value);
              updateBalance(transactions, setTransactions, balance, setBalance, transaction);
            }}
          >
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}
export default App;