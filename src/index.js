import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
// import App from "./App";
import ShoppingList from "./Shopping/containers/ShoppingList";
import store from "./Shopping/store";
// import HocApp from "./AdvancedReact/HOC/HocApp";
// import ChildernApp from "./AdvancedReact/React-Childern/ChildernApp";
// import ReactApiApp from "./AdvancedReact/React-API/ReactApiApp";
// import RouterApp from "./AdvancedReact/ReactRouter/RouterApp";

//import FormApp from "./AdvancedReact/Redux-Forms/example1/FormApp";
// import SimpleForm from "./AdvancedReact/Redux-Forms/example2/SimpleForm";
// import SyncValidationForm from "./AdvancedReact/Redux-Forms/example2/SyncValidationForm";
// import FieldLevelValidationForm from "./AdvancedReact/Redux-Forms/example2/FieldLevelValidationForm";
//import SubmitValidationForm from "./AdvancedReact/Redux-Forms/example2/SubmitValidationForm";
//import showResults from "./AdvancedReact/Redux-Forms/example2/showResults";
//import { Values } from "redux-form-website-template";
//import store from "./AdvancedReact/Redux-Forms/store";
//import AxiosApp from "./AdvancedReact/Axios/AxiosApp";
//import HooksApp from "./AdvancedReact/ReactHooks/HooksApp";

ReactDOM.render(
  <Provider store={store}>
    <ShoppingList />
  </Provider>,
  document.getElementById("root")
);

//ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<ReactApiApp />, document.getElementById("root"));
//ReactDOM.render(<RouterApp />, document.getElementById("root"));
//ReactDOM.render(<HooksApp />, document.getElementById("root"));

// ReactDOM.render(
//   <Provider store={store}>
//     <FormApp />
//   </Provider>,
//   document.getElementById("root")
// );
// ReactDOM.render(
//   <Provider store={store}>
//     <div style={{ padding: 15 }}>
//       <h2>Simple Form</h2>
//       <SubmitValidationForm onSubmit={showResults} />
//     </div>
//   </Provider>,
//   document.getElementById("root")
// );
