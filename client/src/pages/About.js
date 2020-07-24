import React from "react";
import Wrapper from "../components/Wrapper.js";
import CardGroup from "../components/CardGroup.js";
import EmploymentCard from "../components/EmploymentCard.js";
import AboutMeCard from "../components/AboutMeCard.js";
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
