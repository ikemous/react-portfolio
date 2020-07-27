import React, {useEffect} from "react";
import {Container, Image} from "semantic-ui-react";
import SocialList from "../components/contactComponents/SocialList.js";
import ContactCard from "../components/contactComponents/ContactCard.js";
import "./contactPageStyle.css";

function Contact()
{
    useEffect(() =>{
        document.title = "Ikemous - Contact"
    });

    return (
        <Container>
            <Image src='/images/ikeMotorcyle.jpg' size='medium' alt="Ikemous posing for his portfolio page" circular centered/>
            <SocialList />
            <ContactCard />
        </Container>
    );
};

export default Contact;