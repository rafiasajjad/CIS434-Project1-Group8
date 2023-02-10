import test1 from "./engineering.jpg";
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }
  return (
  <div className="App">
  <header className="App-header">
  <img src={test1} />
    <p>
      Access CSU Washkewicz Website below
    </p>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    <a
      className="App-link"
      href="https://engineering.csuohio.edu/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn about CSU
    </a>
  </header>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
