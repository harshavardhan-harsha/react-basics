import React, { Component } from "react";
import axios from "axios";

export default class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
