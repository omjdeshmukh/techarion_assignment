import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="counter">
        <h1>{count}</h1>
      </div>
      <div className="counter_btn">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
