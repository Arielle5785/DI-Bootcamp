import { useRef, useContext } from "react";
import { CounterContext } from "../App";

function CharacterCounter() {
    const { setCount } = useContext(CounterContext);

    const inputRef = useRef(); // Create a reference to the input element

  // Event handler for input change
  const handleInputChange = () => {
    const length = inputRef.current.value.length; // Get input text length
    setCount(length); // Update the shared count state
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef} // Attach the ref to the input
        onInput={handleInputChange} // Listen for input changes
        placeholder="Type something..."
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
    </div>
  );
}

export default CharacterCounter;
