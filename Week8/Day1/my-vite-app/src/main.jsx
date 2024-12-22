import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from "./Hello";

const arr = ['aaa', 'bbb', 'ccc'];
// const element = <h1>Hello {1+1}</h1>
// const element = <
const element = (
  <h1>
    Hello {arr[0]} {arr[1]}
  </h1>
)
createRoot(document.getElementById('root')).render(<App/>)
