import React, { Component } from "react";
import PersonList from "./PersonList";
import PersonInput from "./PersonInput";

export default class AxiosApp extends Component {
  render() {
    return (
      <div>
        <h1 text-align="center">Persons List</h1>
        <PersonInput />
        <PersonList />
      </div>
    );
  }
}
