import React, { useState, useEffect } from "react";
import ProjectCard from "../components/portfolioComponents/ProjectCard.js";
import API from "../utils/API.js";
import Form from "../components/portfolioComponents/Form.js";
import {Container, Card} from "semantic-ui-react";

function Portfolio()
{
    const [filter, setFilter] = useState("");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.getProjects(filter)
        .then(collections => {
            setProjects(collections.data);
            console.log(projects);
        })
        .catch(error => console.log(error));
    }, [filter]);


    return (
        <Container>
            <Form setFilter={setFilter}/>
            <Card.Group>
                {projects.map(project => <ProjectCard {...project}/>)}
            </Card.Group>
        </Container>
    );
};

export default Portfolio;