import React from "react";
import {Card} from "semantic-ui-react";

function ProjectCard(props)
{
    return (
        <Card>
            {props.title}
        </Card>
    )
};

export default ProjectCard;