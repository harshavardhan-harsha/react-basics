import React from "react";
import ContactForm from "./ContactForm";

class FormApp extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

export default FormApp;
