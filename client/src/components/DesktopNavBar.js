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
            <h1 className="navbar-toggler navHeader" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">{page}</h1>
            <div className="collapse navbar-collapse" id="myMenu">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                    <li className={(page==="About")?"nav-item active": "nav-item"}  onClick={() => setPage("About")}>
                        <Header className="nav-link navItem" as={Link} to="/about" content="About" icon="user" />
                    </li>
                    <li className={(page==="Portfolio")?"nav-item active": "nav-item"} onClick={() => setPage("Portfolio")}>
                        <Header className="nav-link navItem" as={Link} to="/portfolio" content="Portfolio" icon="book" />
                    </li>
                    <li className={(page==="Contact")?"nav-item active": "nav-item"}  onClick={() => setPage("Contact")}>
                        <Header className="nav-link navItem" as={Link} to="/contact" content="Contact" icon="phone" />
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default DesktopNavBar;