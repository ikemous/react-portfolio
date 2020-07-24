import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import Form from "../components/portfolioComponents/Form.js";
import {Container, Card} from "semantic-ui-react";

function Portfolio()
{
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        API.getProjects()
        .then(collections => {
            console.log(collections.data)
        })
        .catch(error => console.log(error));
    }, [filter]);
    return (
        <Container>
            <Form />
            <Card.Group>

            </Card.Group>
        </Container>
    );
};

export default Portfolio;