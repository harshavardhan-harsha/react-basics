import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends Component {
  render() {
    var user = {
      name: "Harsha",
      childerns: ["aarush", "rachith"]
    };
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Home name={"Harsha"} age={32} user={user}>
            <p> This is child parameter</p>
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
