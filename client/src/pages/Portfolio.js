import React, { useState } from "react";
import Form from "../components/portfolioComponents/Form.js";
import {Container, Card} from "semantic-ui-react";

function Portfolio()
{
    const [filter, setFilter] = useState("all");
    
    return (
        <Container>
            <Form />
            <Card.Group>

            </Card.Group>
        </Container>
    );
};

export default Portfolio;