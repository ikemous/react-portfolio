import React from "react";
import {Link} from "react-router-dom";
import {Header} from "semantic-ui-react";
import "./globalComponentStyle.css";

function DesktopNavBar({page, setPage, setVisible})
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler navbar-toggler-right" onClick={setVisible} type="button" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <Header as="h1" className="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" content={page} />
            <div className="collapse navbar-collapse" id="myMenu">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                    <Link to="/about" className={(page==="About")?"nav-item active": "nav-item"}  onClick={() => setPage("About")}>
                        <Header className="nav-link navItem" content="About" icon="user" />
                    </Link>
                    <Link to="/portfolio" className={(page==="Portfolio")?"nav-item active": "nav-item"} onClick={() => setPage("Portfolio")}>
                        <Header className="nav-link navItem" content="Portfolio" icon="book" />
                    </Link>
                    <Link to="/contact" className={(page==="Contact")?"nav-item active": "nav-item"}  onClick={() => setPage("Contact")}>
                        <Header className="nav-link navItem" content="Contact" icon="phone" />
                    </Link>
                </ul>
            </div>

        </nav>
    );
};

export default DesktopNavBar;