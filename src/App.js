import React from "react";
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  random = () => {
    return Math.floor(Math.random() * 89);
  };
  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1>Random Star Wars Characters</h1>
        </div>
        <div className="cards">
          <Card num={this.random()} />
          <Card num={this.random()} />
          <Card num={this.random()} />
          <Card num={this.random()} />
          <Card num={this.random()} />
          <Card num={this.random()} />
          <Card num={this.random()} />
          <Card num={this.random()} />
        </div>
      </div>
    );
  }
}

export default App;
