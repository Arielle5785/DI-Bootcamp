import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, minus } from 'lodash'
import './App.css'
import TitleText from './components/TitleText'
import InputText from './components/inpuText'
import { changeTitle } from './redux/actions'

function App() {
 const count = useSelector((state) => state.counterReducer.count)
  const title = useSelector((state) => state.counterReducer.title)

  const dispatch = useDispatch();
  return (
    <>
      <h2>{title}</h2>
      <input onChange={() => dispatch(changeTitle())}/>
      <h2>{count}</h2>
      <button onClick={() => dispatch(add())}> + </button>
      <button onClick={() => dispatch(minus())}> - </button>
    </>
  )
}

export default App
