import React from "react";
import Wrapper from "../components/Wrapper.js";
import PortfolioImage from "../components/PortfolioImage.js";
import CardGroup from "../components/CardGroup.js";
import EmploymentCard from "../components/EmploymentCard.js";
import AboutMeCard from "../components/AboutMeCard.js";

function About()
{
    return (
        <Wrapper>
            <PortfolioImage />
            <CardGroup>
                <AboutMeCard />
                <EmploymentCard />
            </CardGroup>
        </Wrapper>
    )
};

export default About;
