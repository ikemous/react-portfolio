import React, {Suspense} from "react";
// import AboutMeCard from "./AboutMeCard.js";
// import EmploymentCard from "./EmploymentCard.js";
import {Image, Card, Container} from "semantic-ui-react";
const AboutMeCard = React.lazy(() => import("./AboutMeCard.js"));
const EmploymentCard = React.lazy(() => import("./EmploymentCard.js"));

function AboutContents()
{
    return (
        <Container>
            <Image src='/images/ikeMotorcyle.webp' size='medium' alt="Ikemous posing for his portfolio page" circular centered/>
            <Card.Group>
                <Suspense fallback={<h1>Test</h1>}>
                    <AboutMeCard />
                </Suspense>
                <Suspense fallback={<h1>Test</h1>}>
                    <EmploymentCard />  
                </Suspense>
            </Card.Group> 
        </Container>
    )
};

export default AboutContents