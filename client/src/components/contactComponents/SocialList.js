import React from "react";
import SocialItem from "./SocialItem.js";
import {List, Segment} from "semantic-ui-react";

function SocialList()
{
    return (
        <Segment textAlign='center' basic fluid>
            <List size="big" horizontal fluid>
                <SocialItem name="facebook square" color="blue" socialName="/Ikemous" />
                <SocialItem name="github square" color="blue" socialName="/Ikemous" />
                <SocialItem name="twitter square" color="blue" socialName="/Ikemous" />
                <SocialItem name="linkedin" color="blue" socialName="/Ike-Barranco" />
            </List>
    
        </Segment>
        
    )
};

export default SocialList;