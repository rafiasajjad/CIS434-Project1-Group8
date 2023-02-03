import test1 from "./engineering.jpg";
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "new title"
 }, []);
  return (
    
    <div className="App">
      <header className="App-header">
      <img src={test1} />
        <p>
          Access CSU Washkewicz Website below
        </p>
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
  );
}

export default App;
