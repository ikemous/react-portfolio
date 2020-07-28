import React, {useEffect, Suspense} from "react";
import {Image, Card, Container} from "semantic-ui-react";
import "./aboutPageStyle.css";
const AboutMeCard = React.lazy(() => import("../components/aboutComponents/AboutMeCard.js"));
const EmploymentCard = React.lazy(() => import("../components/aboutComponents/EmploymentCard.js"));

function About()
{
    useEffect(() =>{
        document.title = "Ikemous - About"
    }, []);

    return (
        <Container>
            <Image src='/images/ikeMotorcyle.webp' size='medium' alt="Ikemous posing for his portfolio page" circular centered/>
            <Card.Group>
                <Suspense fallback={<h1>Test</h1>}>
                    <AboutMeCard />
                    <EmploymentCard />  
                </Suspense>
            </Card.Group> 
        </Container>
    )
};

export default About;
