import React from "react";
import {Link} from "react-router-dom";

function MobileNavBar({children})
{
    return(
        <>
            <aside className="ui left demo vertical inverted sidebar labeled icon menu">
                <Link to="/About" className="item">
                    <i className="id badge icon"></i>
                    About
                </Link>
                <Link to="/Portfolio" className="item">
                    <i className="book icon"></i>
                    Portfolio
                </Link>
                <Link to="/Contact" className="item">
                    <i className="phone volume icon"></i>
                    Contact
                </Link>
            </aside>
            <main className="pusher">
                {children}
            </main>
        </>
    );
    
};

export default MobileNavBar;