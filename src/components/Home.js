import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  render() {
    var sample = "sample text";
    return (
      <div>
        <p>This is a paragraph</p>
        {sample}
        <p>
          Your name is:{this.props.name} and age is:{this.props.age}
        </p>
        <p>user object name:{this.props.user.name}</p>
        <div>
          <h3>Childern</h3>
          <ul>
            {this.props.user.childerns.map((child, i) => (
              <li key={i}>{child}</li>
            ))}
          </ul>
        </div>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
Home.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
