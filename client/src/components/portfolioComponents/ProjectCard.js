import React from "react";
import {Card, Image, Icon} from "semantic-ui-react";

function ProjectCard({imageURL, title, description, skills, githubURL, deployedURL})
{
    return (
        <Card>
            <Image src={imageURL || "https://via.placeholder.com/150"} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{skills}</Card.Meta>
                <Card.Description>{description}</Card.Description>
                <Card.Content>
                    <a href={githubURL}><Icon name="code"></Icon>Code Repository</a>
                </Card.Content>
                <Card.Content>
                    <a href={deployedURL}><Icon name="world"></Icon>Deployed Application</a>
                </Card.Content>
            </Card.Content>
        </Card>
    );
};

export default ProjectCard;