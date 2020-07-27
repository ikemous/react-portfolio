import React from "react";
import {Segment, Header, Icon} from "semantic-ui-react";

function IconHeader({name, size, text})
{
    return (
        <Segment textAlign="center" basic>
            <Header as="h3" icon>
                <Icon name={name} size={size} />
                {text}
            </Header>
        </Segment>
    );
};

export default IconHeader;