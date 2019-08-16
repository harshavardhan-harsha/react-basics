import Parent from "./Parent";
import "../../App.css";

import React, { Component } from "react";

class ChildernApp extends Component {
  render() {
    return (
      <div>
        <Parent>
          <img src="http://placekitten.com/300/200" alt="" />
          <img src="http://placekitten.com/300/201" alt="" />
          <img src="http://placekitten.com/300/202" alt="" />
        </Parent>
      </div>
    );
  }
}
export default ChildernApp;
