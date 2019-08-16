import React, { Component } from "react";
import "../../App.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class HocApp extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name={"Harsha"} />
        <HoverCounter />
      </div>
    );
  }
}

export default HocApp;
