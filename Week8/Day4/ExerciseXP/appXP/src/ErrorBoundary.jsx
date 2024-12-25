import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "An error has occured" };
    }
    componentDidCatch(error, errorInfo) {
      return (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo}
                </details>
            )
        }
    render() {
       if (this.state.hasError) {
      // Fallback UI when an error is caught
      return <h2>{this.state.errorMessage}</h2>;
            }
    return this.props.children;
    } 
}
export default ErrorBoundary;