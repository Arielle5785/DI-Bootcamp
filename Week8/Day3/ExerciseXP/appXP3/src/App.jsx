import { useState } from 'react'
// import BuggyCounter from './components/BuggyCounter.jsx' / EX1
// import ErrorBoundary from './ErrorBoundary.jsx'/ EX1
//EX2
import Color from './components/Color.jsx'

import './App.css'

// function App() {
  
//Exercise 1
  // return (
  //   <>
  //     <div>
  //       <h3>Buggy Counter first Simulation</h3>
  //         <ErrorBoundary>
  //           <BuggyCounter />
  //           <BuggyCounter />
  //         </ErrorBoundary>
  //     </div>
  //   </>
  // )
  // return (
  //   <>
  //     <div>
  //       <h3>Buggy Counter second Simulation</h3>
  //         <ErrorBoundary>
  //           <BuggyCounter />
  //         </ErrorBoundary>
  //     </div>
  //         <ErrorBoundary>
  //           <BuggyCounter />
  //         </ErrorBoundary>
  //   </>
  // )
  // return (
  //   <>
  //     <div>
  //       <h3>Buggy Counter third Simulation</h3>
          
  //           <BuggyCounter />
          
  //     </div>
         
  //   </>
// )
// }

//Exercise 2
  function App() {
  return (
    <div>
        <Color />
    </div>
  )
}

export default App
