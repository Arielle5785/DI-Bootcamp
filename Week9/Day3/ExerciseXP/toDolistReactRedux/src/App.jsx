import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './ToDoToolkit/Tasks'

function App() {
  
  return (
    <>
      <h1>To Do List</h1> 
      <p>Type a task to complete before the deadline.</p >
        
        <Tasks />
    </>    
  )
}

export default App
