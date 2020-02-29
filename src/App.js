import React from "react";
import "./App.css";
import Validator from "./components/Validator";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //this.setState({ value: event.target.value });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter something to Validate:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          {/* <input type="submit" value="Submit"  /> */}
        </form>
        <br></br>
        <Validator value={this.state.value}></Validator>
      </div>
    );
  }
}

export default App;
