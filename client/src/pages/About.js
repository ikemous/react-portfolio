import React from "react";
import Wrapper from "../components/Wrapper.js";
import CardGroup from "../components/CardGroup.js";
import EmploymentCard from "../components/EmploymentCard.js";
import AboutMeCard from "../components/AboutMeCard.js";
import {Image} from "semantic-ui-react";

function About()
{
    return (
        <Wrapper>
            <Image src='/images/ikeMotorcyle.jpg' size='medium' circular centered/>
            <CardGroup>
                <AboutMeCard />
                <EmploymentCard />
            </CardGroup>
        </Wrapper>
    )
};

export default About;
