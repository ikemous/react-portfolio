import React, {useEffect, Suspense} from "react";
import EmploymentCard from "../components/aboutComponents/EmploymentCard.js";
import AboutMeCard from "../components/aboutComponents/AboutMeCard.js";
import {Image, Card, Container} from "semantic-ui-react";
import "./aboutPageStyle.css";
const AboutContents = React.lazy(() => import("../components/aboutComponents/AboutContents.js"));

function About()
{
    useEffect(() =>{
        document.title = "Ikemous - About"
    });

    return (
        <Suspense fallback={<h1>Test</h1>}>
            <AboutContents />
        </Suspense>
    )
};

export default About;
