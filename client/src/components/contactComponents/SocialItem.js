import React from "react";
import {List, Icon} from "semantic-ui-react";
import "./socialItemStyle.css";

function SocialItem({name, color, socialName, link})
{
    return (
        <List.Item>
            <a href={link} rel="noopener noreferrer" target="_blank">
                <Icon className="socialIcon" name={name} color={color} size="large" />
                {socialName}
            </a>
        </List.Item>
    );
};

export default SocialItem;