import React, { Component } from "react";

// class Color extends Component {
//   constructor() {
//     super();
//     this.state = {
//       favoriteColor: "red",
//     };
//   }

    //this is only working with class components, actually (2024)
    //Part I
    // true: can change to blue
    //false: cannot
//   shouldComponentUpdate() {
//     return true;
//   }
// shouldComponentUpdate() {
//     return false;
    //   }

    //Part II
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ favoriteColor: "yellow" });
    //     }, 5000);
    // }

    // componentDidUpdate() {
    // console.log("after update");
    // }

    //PartIII
    //  getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("in getSnapshotBeforeUpdate");
    //     console.log("Previous favorite color:", prevState.favoriteColor);
    
    // return prevState.favoriteColor;
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Snapshot from getSnapshotBeforeUpdate:", snapshot);
    // }
    
    // changeColor = () => {
    //     this.setState({ favoriteColor: "blue" });
    // };

    // render() {
    //     return (
    //     <div>
    //         <h1>
    //         My favorite color is <i>{this.state.favoriteColor}</i>
    //         </h1>
    //         <button onClick={this.changeColor}>Change Color</button>
    //     </div>
    //     );
    // }

    //Exercise 3

// Child component defined outside of Color
class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class Color extends Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red", // Initial color
      show: true, // New property to control Child rendering
    };
  }

  // Method to change the color
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>
          My favorite color is <i>{this.state.favoriteColor}</i>
        </h1>
        <button onClick={this.changeColor}>Change Color</button>
        {this.state.show && <Child />}   
        <button onClick={() => this.setState({ show: false })}>Delete Header</button>
      </div>
    );
  }
}


 

export default Color;
