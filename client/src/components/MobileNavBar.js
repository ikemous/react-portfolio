import React from "react";

function MobileNavBar({children})
{
    return(
        <>
            <aside className="ui left demo vertical inverted sidebar labeled icon menu">
                <a className="item">
                    <i className="home icon"></i>
                    Home
                </a>
                <a className="item">
                    <i className="block layout icon"></i>
                    Topics
                </a>
                <a className="item">
                    <i class="smile icon"></i>
                    Friends
                </a>
            </aside>
            <main class="pusher">
                {children}
            </main>
        </>
    );
    
};

export default MobileNavBar;