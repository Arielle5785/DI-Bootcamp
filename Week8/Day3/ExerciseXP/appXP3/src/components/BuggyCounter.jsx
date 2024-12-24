import React, { Component} from "react";

class BuggyCounter extends React.Component{
    constructor() {
        super();
        this.state = {
           counter: 0,
        }
    }
    handleClick = () => {
        this.setState((prevState) =>
       
        {
            if (prevState.counter + 1 > 5) {
                throw new Error('I crashed!');
            }
        return { counter: prevState.counter + 1 };    
        }
    )
}
    render() {
        return (
            <>
                <div>
                    <h1>Buggy Counter</h1>
                    <p onClick={this.handleClick}>Counter:{ this.state.counter}</p>
                </div>
            </>
        )
    }
}

export default BuggyCounter;