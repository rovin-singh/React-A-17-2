import React from "react";
import "./Counter.css";
const Counter = ({ value, setCount }) => {
  return (
    <div>
      <h1>
        count <p className={value % 2 === 1 ? "red " : "green"}> {value}</p>
      </h1>
      <button onClick={() => setCount(value + 1)}>Increment</button>
      <button onClick={() => setCount(value - 1)}>Decrement</button>
      <button onClick={() => setCount(value * 2)}>Double</button>
    </div>
  );
};
export default Counter;
