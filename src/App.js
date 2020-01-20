import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  // setState will call render() with 'New' state.
  // that is the reason why we use setState.
  componentDidMount() {
    console.log("Component mounted");
  }
  componentDidUpdate() {
    console.log("I've just updated.");
  }
  componentWillUnmount() {
    console.log("Goodbye.");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is {this.state.count}.</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
