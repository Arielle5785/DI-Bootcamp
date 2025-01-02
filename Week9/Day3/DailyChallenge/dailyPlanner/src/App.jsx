import React from "react";
import Tasks from "./components/Tasks";

function App() {
    return (
        <div>
            <h1>Daily Task Planner</h1>
            <p>Type a task to complete before the deadline.</p >
            <p>Click the added task to mark it complete.   
            Click the cross to delete it. </p>

            <Tasks />
        </div>
    );
}

export default App;
