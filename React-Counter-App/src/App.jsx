import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="title">Counter App</h1>

      <div className="counter-box">
        <button 
          className="btn" 
          disabled={count === 0} 
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <h2 className="count">{count}</h2>

        <button 
          className="btn" 
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
