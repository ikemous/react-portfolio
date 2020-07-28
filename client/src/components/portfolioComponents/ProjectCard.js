import React from "react";
import {Card, Image, Icon} from "semantic-ui-react";
import "./projectCardStyle.css";

function ProjectCard({imageRoute, title, description, skills, githubURL, deployedURL})
{
    return (
        <Card className="projectCard">
            <Image style={{height: "290px", width: "290px"}} src={imageRoute || "https://via.placeholder.com/150"} alt={`${title} App displayed in running state`}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{skills}</Card.Meta>
                <Card.Description>{description}</Card.Description>
                <Card.Content>  
                    <a href={githubURL} rel="noopener noreferrer" target="_blank"><Icon name="code"></Icon>Code Repository</a>
                </Card.Content>
                {(deployedURL)?
                    <Card.Content>
                        <a href={deployedURL} rel="noopener noreferrer" target="_blank"><Icon name="world"></Icon>Deployed Application</a>
                    </Card.Content>
                    :
                    <p><Icon name="frown outline"></Icon>No Deployed URL</p>
                }
            </Card.Content>
        </Card>
    );
};

export default ProjectCard; 