/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MobileNavBar from "./components/MobileNavBar.js";
import DesktopNavBar from "./components/DesktopNavBar.js";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import "./App.css";

function App()
{

  const [page, setPage] = useState("About");


  return (
    <Router>
      <MobileNavBar>
        <DesktopNavBar page={page} setPage={setPage}/>
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </MobileNavBar>
    </Router>
  );
}

export default App;


/**
 * USED TO PUSH ITEMS TO THE SIDE
 * $('.ui.sidebar')
  .sidebar('toggle')
;

 */
