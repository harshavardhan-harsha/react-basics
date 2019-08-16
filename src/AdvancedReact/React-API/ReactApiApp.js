import React, { Component } from "react";

class ReactApiApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoading: true, items: json });
      });
  }

  render() {
    const { isLoading, items } = this.state;
    if (!isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | Email: {item.email}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
export default ReactApiApp;
