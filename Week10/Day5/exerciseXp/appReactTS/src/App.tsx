// import React from "react"
import Greeting from "./components/Greeting"
import Counter from "./components/Counter"
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";

function App() {

  return (
    <>
      
      <Greeting name="John" messageCount={6}></Greeting>
      <Counter />
      <div>
            <h1>Testing UserCard Component</h1>
            {/* Test with all props provided */}
            <UserCard name="Alice" age={25} role="Admin" />

            {/* Test with some props omitted */}
            <UserCard name="Bob" age={30} />

            {/* Test with no props provided */}
            <UserCard />
      </div>
      <div>
            <h1>Testing UserList Component</h1>
            <UserList />
      </div>
      
    </>
  )
}

export default App