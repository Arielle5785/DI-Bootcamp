import React,{useState} from 'react'
import Calculator from "./components/Calculator";
import Selector from "./components/Selector";
import Button from 'react-bootstrap/Button';

import './App.css'

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    let res;
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        break;
      default:
        res = null;
    }
    setResult(res);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <p><strong>How does it work?</strong><br />
        Enter a number in both fields, select the operator to <i>sum, substract, multiply or divide</i>.<br />
        The result is automatically displayed.
      </p>
      <Calculator setNum1={setNum1} setNum2={setNum2} result={result} />
      <Selector calculate={calculate} />
    </div>
  );
};

export default App;
