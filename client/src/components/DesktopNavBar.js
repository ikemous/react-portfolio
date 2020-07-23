import React from "react";
import {Link} from "react-router-dom";

function DesktopNavBar({page, setPage})
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">

            <button className="navbar-toggler navbar-toggler-right" id="menu" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <h1 className="navbar-toggler navHeader" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">{page}</h1>

            <div className="collapse navbar-collapse" id="myMenu">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                    <li className={(page==="About")?"nav-item active": "nav-item"}>
                        <Link className="nav-link navItem" to="/About"><i className="fas fa-diagnoses" onClick={() => setPage("About")}></i>About</Link>
                    </li>
                    <li className={(page==="Portfolio")?"nav-item active": "nav-item"}>
                        <Link className="nav-link navItem" to="/Portfolio"><i className="fas fa-book-open" onClick={() => setPage("Portfolio")}></i>Portfolio</Link>
                    </li>
                    <li className={(page==="Contact")?"nav-item active": "nav-item"}>
                        <Link className="nav-link navItem" to="/Contact"><i className="fas fa-envelope-open" onClick={() => setPage("Contact")}></i>Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default DesktopNavBar;