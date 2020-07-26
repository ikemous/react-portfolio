import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import ProjectCard from "../components/portfolioComponents/ProjectCard.js";
import API from "../utils/API.js";
import Dropdown from "../components/portfolioComponents/Dropdown.js";
import {Container, Card} from "semantic-ui-react";

function Portfolio()
{
    const [filter, setFilter] = useState("");
    const [projects, setProjects] = useState([]);
    const {filterParam} = useParams();

    useEffect(() => {
        let query = filter;
        
        if(filterParam)
            query = filterParam

        API.getProjects(query)
        .then(collections => {
            setProjects(collections.data);
        })
        .catch(error => console.log(error));
    }, [filter]);


    return (
        <Container>
            <Dropdown setFilter={setFilter}/>
            <Card.Group>
                {(projects)?projects.map(project => <ProjectCard key={project._id} {...project} />):<h2>No Projects Found</h2>}
            </Card.Group>
        </Container>
    );
};

export default Portfolio;