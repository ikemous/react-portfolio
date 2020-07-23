/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MobileNavBar from "./components/MobileNavBar.js";
import DesktopNavBar from "./components/DesktopNavBar.js";
import About from "./pages/About.js";
import "./App.css";

function App()
{

  const [page, setPage] = useState("About");


  return (
    <Router>
      <MobileNavBar>
        <DesktopNavBar page={page} setPage={setPage}/>
        <Route exact path="/About" component={About} />
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
