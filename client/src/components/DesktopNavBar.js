import React from "react";
import {Link} from "react-router-dom";

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
                        <Link className="nav-link navItem" to="/about"><i className="fas fa-diagnoses"></i>About</Link>
                    </li>
                    <li className={(page==="Portfolio")?"nav-item active": "nav-item"} onClick={() => setPage("Portfolio")}>
                        <Link className="nav-link navItem" to="/portfolio"><i className="fas fa-book-open"></i>Portfolio</Link>
                    </li>
                    <li className={(page==="Contact")?"nav-item active": "nav-item"}  onClick={() => setPage("Contact")}>
                        <Link className="nav-link navItem" to="/contact"><i className="fas fa-envelope-open"></i>Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default DesktopNavBar;