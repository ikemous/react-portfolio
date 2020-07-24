/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MobileNavBar from "./components/MobileNavBar.js";
import DesktopNavBar from "./components/DesktopNavBar.js";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import "./App.css";

function App()
{
  const [page, setPage] = useState("About");
  const [visible, setVisible] = useState(false);

  return (
    <Router>
      <MobileNavBar visible={visible} setVisible={() => setVisible(false)}>
        <DesktopNavBar page={page} setPage={setPage} setVisible={() => setVisible(true)}/>
        <Switch>
          <Route exact path={['/','/about']} component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
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
