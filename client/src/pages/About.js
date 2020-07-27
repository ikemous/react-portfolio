import React, {useEffect} from "react";
import EmploymentCard from "../components/aboutComponents/EmploymentCard.js";
import AboutMeCard from "../components/aboutComponents/AboutMeCard.js";
import {Image, Card, Container} from "semantic-ui-react";
import "./aboutPageStyle.css";

function About()
{
    useEffect(() =>{
        document.title = "Ikemous - About"
    });
    return (
        <Container>
            <Image src='/images/ikeMotorcyle.jpg' size='medium' alt="Ikemous posing for his portfolio page" circular centered/>
            <Card.Group>
                <AboutMeCard />
                <EmploymentCard />  
            </Card.Group>
        </Container>
    )
};

export default About;
