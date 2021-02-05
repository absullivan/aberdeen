import React, { Component } from "react";
import "./App.css";

function Foo(props) {
  console.log("props for Foo component", props);
  return (
    <div>
      <h3>My name is {props.name}</h3>
    </div>
  );
}

class App extends Component {
  state = {
    link: "https://github.com/facebook/create-react-app"
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calligram</h1>
        </header>
        <p>
          this was bootstrapped with
          <a href={this.state.link}>{this.state.link}</a>
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code>.
          <Foo name="max" />
        </p>
      </div>
    );
  }
}

export default App;
