// import { useState } from 'react'
// import { Routes, Route, NavLink } from "react-router"
// import Home from './pages/Home'
// import Profile from './pages/Profile'
// import Shop from './pages/Shop'
// import Nav from './pages/nav'
// import ErrorBoundary from './ErrorBoundary'
// import PostList from './components/PostL'

// import Example1 from './components/Example1'
// import Example2 from './components/Example2'
// import Example3 from './components/Exemple3'
import './App.css'

// EX1
// function App() {
  

//   return (
//     <>
//     <div>
//           <Nav/>
//             <Routes>
//                 <Route path='/home' element={
//                   <ErrorBoundary>
//                     <Home />
//                   </ErrorBoundary>
//                   } />
//                 <Route path='/profile' element={
//                   <ErrorBoundary>
//                     <Profile />
//                   </ErrorBoundary>} />
//                 <Route path='/shopp' element={
//                   <ErrorBoundary>
//                     <Shop />
//                   </ErrorBoundary>} />
//                 <Route path='*' element={<h1>An error has occured</h1>} />
//             </Routes>
//         </div> 
//     </>
//   )
// }
//EX2
// function App() {

//   return (
//     <PostList/>
//   )
// }
// EX3
// function App() {

//   return (
//     <>
//     <Example1/>
//     <Example2/>
//     <Example3/>
//     </>
//   )
// }

//EX4
function App() {
  const webhook = async () => {
    const data = {
      key1: 'myusernames',
      email: 'mymail@yahoo.com',
      name: 'Isaac',
      lastname: 'Newton',
      age: 27
    }
    try {
      const response = await fetch('https://webhook.site/6044dcf0-49b5-4ad4-a5c0-f4a561b4fb12', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
    return (
      <>
        <div>
          <button onClick={()=>webhook()} >Press me to post some data</button>
        </div>
      </>
    )
  
} 

export default App
