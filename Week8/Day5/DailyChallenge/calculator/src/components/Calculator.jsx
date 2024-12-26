import React from "react";

const Calculator = ({ setNum1, setNum2, result }) => {
  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        onChange={handleNum1Change}
      />
      <input
        type="number"
        placeholder="Enter second number"
        onChange={handleNum2Change}
      />
      <h2>Result: {result !== null ? result : "No calculation yet"}</h2>
    </div>
  );
};

export default Calculator;
