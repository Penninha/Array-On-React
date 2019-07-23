import React, { Component } from "react";

import Header from "./header";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayTest: [1, 2, 3, 4]
    };
    this.addNumber = this.addNumber.bind(this);
    this.removeNumber = this.removeNumber.bind(this);
  }

  addNumber() {
    let newArray = this.state.arrayTest;
    newArray.push(this.state.arrayTest.length + 1);
    this.setState({ arrayTest: newArray });
  }

  removeNumber() {
    let newArray = this.state.arrayTest;
    newArray.pop();
    this.setState({ arrayTest: newArray });
  }

  render() {
    return (
      <div>
        <Header
          name="Arrays On React"
          array={this.state.arrayTest}
          addNumber={this.addNumber}
          removeNumber={this.removeNumber}
        />
      </div>
    );
  }
}

export default Parent;
