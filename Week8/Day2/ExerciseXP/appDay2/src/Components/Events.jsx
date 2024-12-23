import React, { useState } from 'react';
// import { use } from 'react';

function Events() {
    const [isToggleOn, setisToggleOn] = useState(true)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${event.target.value}`)
        }
    }
    const ClickMe = () => {
    alert(`I was clicked`)
    
}
    return (
        <>
            <button onClick={() => setisToggleOn(!isToggleOn)} >{isToggleOn? 'ON':'OFF' }</button>
            <input onKeyDown={(event) => handleKeyDown(event)} placeholder="Press the ENTER key!" />
            <button onClick={()=> ClickMe()}>Click me !</button>
        </>
    );
};

export default Events;