import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    const newCount = count + 1;
    setCount(newCount);
  }
  function handleDecrement() {
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div className="container">
      <input disabled type="text" className="counter" value={count}></input>
      <div className="btn-container">
        <button className="btn add" onClick={handleIncrement}>
          +
        </button>
        <button className="btn sub" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
