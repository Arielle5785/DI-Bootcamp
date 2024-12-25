import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '', // For GET response
      inputValue: '', // For form input
      responseMessage: '', // For POST response
    };
  }

  // Fetch the GET response when the component mounts
  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5009/api/hello');
      const data = await response.json();
      this.setState({ message: data.message }); // Update state with GET response
    } catch (error) {
      console.error('Error fetching GET data:', error);
    }
  }

  // Handle form submission and POST request
  handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const { inputValue } = this.state; // Get the input value from state
    try {
      const response = await fetch('http://localhost:5009/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }), // Send inputValue as JSON in POST body
      });
      const data = await response.json();
      this.setState({ responseMessage: data.message }); // Update state with POST response
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  // Update inputValue state as the user types
  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { message, inputValue, responseMessage } = this.state;

    return (
      <div>
        {/* Display GET response */}
        <h1>{message}</h1>

        {/* Form for POST request */}
        <h2>Post to Server:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange} // Update inputValue state
            placeholder="Type something"
          />
          <button type="submit">Submit</button>
        </form>

        {/* Display POST response */}
        {responseMessage && <p>{responseMessage}</p>}
        {/* console.log({responseMessage}); */}
        
      </div>
    );
  }
}

export default App;
