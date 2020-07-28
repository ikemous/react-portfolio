import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MobileNavBar from "./components/MobileNavBar.js";
import DesktopNavBar from "./components/DesktopNavBar.js";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import NotFound from "./pages/Notfound.js";

function App()
{
  const [page, setPage] = useState();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    let firstLocation = window.location.pathname;
    firstLocation = firstLocation.split('/')[1];
    if(firstLocation)
    {
      firstLocation = firstLocation[0].toUpperCase() + firstLocation.slice(1);
      switch(firstLocation)
      {
        case "About":
        case "Portfolio":
        case "Contact":
          return setPage(firstLocation);
        default:
          return setPage("Page Not Found");
      };
    }
    return setPage("About");
  }, []);

  const handleMobileClick = (pageName, visibility) => {
    setPage(pageName);
    setVisible(visibility);
  }

  return (
    <Router>
      <MobileNavBar visible={visible} setVisible={() => setVisible(false)} handleMobileClick={handleMobileClick}>
        <DesktopNavBar page={page} setPage={setPage} setVisible={() => setVisible(true)}/>
        <Switch>
          <Route exact path={['/','/about']} component={About} />
          <Route exact path={["/portfolio", "/portfolio/:filterParam"]} component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MobileNavBar>
    </Router>
  );  
}

export default App;