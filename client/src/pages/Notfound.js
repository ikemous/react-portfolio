import React from "react";
import {Link} from "react-router-dom";
import {Segment} from "semantic-ui-react";

function NotFound()
{
    return (
        <Segment textAlign="center" basic>
            <h2><span role="image" aria-label="Crying Face Emoji">😭</span> Page Not Found <span role="image" aria-label="Crying Face Emoji">😭</span></h2>
            <p>Click <Link to={"/about"}>Here</Link> Or Use The Navigation Bar</p>
        </Segment>
    );
};

export default NotFound;    