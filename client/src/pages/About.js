import React, {useEffect} from "react";
import AboutMeCard from "../components/aboutComponents/AboutMeCard.js";
import EmploymentCard from "../components/aboutComponents/EmploymentCard.js";
import {Image, Card, Container} from "semantic-ui-react";
import "./aboutPageStyle.css";

function About()
{
    useEffect(() =>{
        document.title = "Ikemous - About"
    }, []);

    return (
        <Container>
            <Image src='/images/ikeMotorcyle.webp' size='medium' alt="Ikemous posing for his portfolio page" circular centered/>
            <Card.Group centered>
                <AboutMeCard />
                <EmploymentCard />  
            </Card.Group> 
        </Container>
    )
};

export default About;
