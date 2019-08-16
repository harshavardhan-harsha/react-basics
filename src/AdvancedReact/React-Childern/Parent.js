import React, { Component, Children } from "react";

class Parent extends Component {
  render() {
    const buttons = Children.map(this.props.children, child => {
      return <button>{child}</button>;
    });
    return (
      <div>
        Total Children:{Children.count(this.props.children)}
        {buttons}
      </div>
    );
  }
}

export default Parent;
