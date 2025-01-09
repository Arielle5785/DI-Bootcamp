import React, { useState } from "react";

interface CounterState {
    count: number;
    lastAction: string;
}

const Counter = (): React.ReactElement => {
    const [state, setState] = useState<CounterState>(() => ({
        count: 0,
        lastAction: "None",
    }));

    const increment = (): void => {
        setState({
            count: state.count + 1,
            lastAction: "Incremented",
        });
    };

    const decrement = (): void => {
        setState({
            count: state.count - 1,
            lastAction: "Decremented",
        });
    };

    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <p>Last Action: {state.lastAction}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
