import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { useState } from "react";

import { Routes, Route, Link, NavLink } from "react-router";
import Nav from "./pages/nav";
function App() {
  return (
  // const [page, setPage] = useState('home');

  // if(page === 'home') return <Home setPage={setPage}/>

  // if(page === 'about') return <About setPage={setPage}/>
    <>
      <Nav/>
    
    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    {/* <Route path='/hp'
      element={<>
        <Home />
        <About />
      </>} /> */}
    <Route path='/about' element={<About />} />
    <Route path='/shop' element={<Shop />} />
    <Route path="*" element={ <h1>404 page not found</h1>} />
    

    </Routes>
   </> )
}

export default App;