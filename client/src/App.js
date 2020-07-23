/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MobileNavBar from "./components/MobileNavBar.js";
import About from "./pages/About.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <MobileNavBar>
          <Route exact path="/" component={About} />
        </MobileNavBar>
      </Router>
    );
  }
}

export default App;
