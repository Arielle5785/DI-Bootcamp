import React,{useState} from 'react';
import Garage from './Garage.jsx';

function Car(props) {
    // console.log(props);
    const [color, setColor] = useState("red")
    return (
        <>
            <div>
                <h1>This car is a {color} {props.x}</h1>
                <Garage size ="small"/>
            </div>      
        </>
    )
}
export default Car;