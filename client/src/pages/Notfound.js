import React from "react";
import {Link} from "react-router-dom";
import {Segment} from "semantic-ui-react";

function NotFound()
{
    return (
        <Segment textAlign="center" basic style={{color: "#4183c4"}}>
            <h2><span role="img" aria-label="crying">😭</span> Page Not Found <span role="img" aria-label="crying">😭</span></h2>
            <p>Click <Link to={"/about"}>Here</Link> Or Use The Navigation Bar</p>
        </Segment>
    );
};

export default NotFound;