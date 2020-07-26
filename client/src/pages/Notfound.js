import React from "react";
import {Link} from "react-router-dom";
import {Image, Segment} from "semantic-ui-react";

function NotFound()
{
    return (
        <Segment textAlign="center" basic>
            <h2>😭 Page Not Found 😭</h2>
            <p>Click <Link to={"/about"}>Here</Link> Or Use The Navigation Bar</p>
        </Segment>
    );
};

export default NotFound;    