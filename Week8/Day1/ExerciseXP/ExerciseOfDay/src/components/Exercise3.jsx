import React, { Component } from 'react';

class Exercise extends Component {
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
            };
        return (
            <div>
                <h1>This is a Red Header</h1>
                <p>This is a sample paragraph to demonstrate the Exercise component.</p>
                <a href="https://robohash.org" target="_blank" rel="">Visit Robot Website</a>
                 {/* Form */}
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <button type="submit">Submit</button>
                </form>

                {/* Image */}
                <img
                    src="https://robohash.org/1size=150x150" alt="Placeholder" style={{ display: 'block', margin: '20px auto' }}
                />

                {/* List */}
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li><Milk></Milk></li>
                </ul>

            </div>
        );
    }
}
export default Exercise;