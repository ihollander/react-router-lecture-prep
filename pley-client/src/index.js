import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";

// What do we want to add to the page
// Where do we want to add it
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
