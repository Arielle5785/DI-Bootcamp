import { useState, createContext } from "react";
import CharacterCounter from "./components/CharacterCounter";
import ShowCounter from "./components/ShowCounter";

// Create Context
export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0); // Shared state for the counter

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div style={{ padding: "20px" }}>
        <h1>Character Counter</h1>
        <p>Type any text to know how many characters are.</p>
        <CharacterCounter />
        <ShowCounter />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
