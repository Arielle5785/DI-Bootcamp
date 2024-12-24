import CounterButton from "./CounterButton.jsx";
import CounterDisplay from "./CounterDisplay.jsx";
// import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  if (count > 5) {
    throw new Error("oops")
  }
  return (
    <>
          <CounterButton setCount={setCount} num = {1} />
          <CounterButton setCount={setCount} num = {-1} />
          <CounterDisplay count={count} />
    </>
  );
};
export default Counter;