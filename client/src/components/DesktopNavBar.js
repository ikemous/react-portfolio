import React from "react";
import {Link} from "react-router-dom";

function DesktopNavBar()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">

            <button className="navbar-toggler navbar-toggler-right" id="menu" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <h1 className="navbar-toggler navHeader" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">PageName</h1>

            <div className="collapse navbar-collapse" id="myMenu">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                    <li className="nav-item">
                        <Link className="nav-link navItem" to="/About"><i className="fas fa-diagnoses">About</i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navItem" href="/Portfolio"><i className="fas fa-book-open"></i>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navItem" href="/Contact"><i className="fas fa-envelope-open"></i>Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default DesktopNavBar;