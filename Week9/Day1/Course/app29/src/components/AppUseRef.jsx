import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState("abc");
  const testRef = useRef(["abc", "cde"]);
  console.log("testRef=>", testRef);

  const divRef = useRef();
  const inputColorRef = useRef();

  useEffect(() => {
    console.log(divRef);
  }, []);

  const changeBG = () => {
    console.log(inputColorRef.current.value);
    divRef.current.style.backgroundColor = inputColorRef.current.value;
  };
return (
    <div ref={divRef}>
      <h2>useRef</h2>
      <button onClick={() => changeBG()}>Chenge Color</button>
      <div>
        <input type="email" ref={inputColorRef}/>
      </div>
    </div>
  );
}

export default App;