import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import DemoCarousel from './components/Carousel';

function App() {
    return (

        <>
            <DemoCarousel />
        </>
   
  )
}
export default App;