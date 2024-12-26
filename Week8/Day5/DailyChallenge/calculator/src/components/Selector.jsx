import React from "react";

const Selector = ({ calculate }) => {
  return (
    <div>
      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>
    </div>
  );
};

export default Selector;
