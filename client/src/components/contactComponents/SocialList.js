import React from "react";
import SocialItem from "./SocialItem.js";
import {List, Segment} from "semantic-ui-react";

function SocialList()
{
    return (
        <Segment textAlign='center' basic>
            <List size="big" horizontal animated>
                <SocialItem name="facebook square" color="blue" socialName="/Ikemous" link="https://www.facebook.com/ikemous"/>
                <SocialItem name="github square" color="blue" socialName="/Ikemous" link="https://github.com/ikemous"/>
                <SocialItem name="twitter square" color="blue" socialName="/Ikemous" link="https://twitter.com/real_ikemous"/>
                <SocialItem name="linkedin" color="blue" socialName="/Ike-Barranco" link="https://www.linkedin.com/in/ike-barranco/"/>
            </List>
        </Segment>
        
    )
};

export default SocialList;