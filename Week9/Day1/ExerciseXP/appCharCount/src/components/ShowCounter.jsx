import { useContext } from "react";
import { CounterContext } from "../App";

function ShowCounter() {
  const { count } = useContext(CounterContext); // Access the shared count state

  return (
    <div>
      <h2>Character Count: {count}</h2>
    </div>
  );
}

export default ShowCounter;
