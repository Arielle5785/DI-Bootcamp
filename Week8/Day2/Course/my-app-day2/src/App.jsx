import "./App.css";
import { useState } from "react";

function App() {
  // state = {}

  // let users = [{name:'Jonn', id:1}]
  /**
   * state - users
   * setState - setUsers
   */
  // const [users, setUsers] = useState([{ id: 1, name: 'aaa' }]);
  const [users, setUsers] = useState([{}])
  const [textInput,setTextInut ] = useState('abc')
  const handleClick = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // console.log(data);
      setUsers(data)
      console.log(users);
    } catch (error) {
      console.log(error);
    }
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => {
    //     console.log(users);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  // const handleInput = (e) => {
  //   console.log("hello from input", e.target.value);
    
  // };
  const handleInput = (e) => {
    console.log('hello from input', e.target.value);
    setTextInut(e.target.value)
    
  }

  console.log(users);
  return (
    <>
      <h2>Events,State,Class vs. Function</h2>
      <button onClick={() => handleClick()}>Click!</button>
      <input onChange={(e) => handleInput(e)} placeholder='Search...' />
      <h2>Users</h2>
      {users.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <h2>Display here the input value</h2>
      <input onChange={(e) => handleInput(e)} placeholder ='type spmething...' />
      <h3>{textInput}</h3>

    </>
  );
}

export default App;