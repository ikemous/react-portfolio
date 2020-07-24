import React from "react";
import Wrapper from "../components/aboutComponents/Wrapper.js";
import EmploymentCard from "../components/aboutComponents/EmploymentCard.js";
import AboutMeCard from "../components/aboutComponents/AboutMeCard.js";
import {Image, Card} from "semantic-ui-react";

function About()
{
    return (
        <Wrapper>
            <Image src='/images/ikeMotorcyle.jpg' size='medium' circular centered/>
            <Card.Group>
                <AboutMeCard />
                <EmploymentCard />  
            </Card.Group>
        </Wrapper>
    )
};

export default About;
