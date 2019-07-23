import React, { Component } from "react";

class Header extends Component {
  render() {
    const array = this.props.array;
    let arrayList = array.map((element, key) => {
      return (
        <div key={key} className="col-3">
          <h3>{element}</h3>
        </div>
      );
    });

    let divToShow;
    if (this.props.array.length === 0) {
      divToShow = (
        <div>
          <span>No items found! :(</span>
          <br />
          <span>
            Try adding <strong>MORE!</strong>
          </span>
        </div>
      );
    } else {
      divToShow = <div className="row">{arrayList}</div>;
    }

    return (
      <div className="testCss">
        <h1>{this.props.name}</h1>
        <button className="btn btn-dark" onClick={this.props.addNumber}>
          Add
        </button>
        <button
          className="btn btn-dark"
          disabled={this.props.array.length === 0}
          onClick={this.props.removeNumber}
        >
          Remove
        </button>
        {divToShow}
      </div>
    );
  }
}

export default Header;
