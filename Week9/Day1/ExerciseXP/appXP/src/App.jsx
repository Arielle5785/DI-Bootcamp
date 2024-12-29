import {createContext, useState } from 'react'

import Main from './components/Main';

import './App.css'

export const ThemeModeContext = createContext();
function App() {
  const [mode,setMode] = useState('light')

  return (
    <>
      <ThemeModeContext.Provider value={{ mode, setMode }}>
        <Main/>
      </ThemeModeContext.Provider>
    </>
  )
}

export default App
