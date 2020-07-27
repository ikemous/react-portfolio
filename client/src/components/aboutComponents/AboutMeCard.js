import React from "react";
import {Card, CardContent, Icon} from "semantic-ui-react";

function AboutMeCard()
{
    return (
        <Card fluid>
            <Card.Header as="h2" textAlign="center">Adrian Ike Barranco</Card.Header>
            <Card.Content>
                <Card.Description>
                    Variety IT specialist with over two years of experience in System Administration, Network Administration, CNOC Monitoring, 
                    troubleshooting and various coding languages. Trained to and deployed Cisco devices while deployed with the Utah Army 
                    National Guard. While in college i've completed multiple classes in programming which included HTML, CSS, C#, C++, and SEO. 
                    I've also completed Trilogies Coding Bootcamp hosted by the University of Utah. Technologies covered by this course are: HTML,
                    CSS, JavaScript, jQuery, Bootstrap, APIs, MySQL, Handlebars, Node, Express, MongoDB, and React.
                </Card.Description>
            </Card.Content>
            <CardContent>
                <Card.Header as="header" textAlign="center">Resume</Card.Header>
                <Card.Content extra textAlign="center">
                    <a href="/files/resume.pdf" rel="noopener noreferrer" target="_blank">
                        <Icon name="file pdf" size="large" color="red"/>
                        Adobe PDF
                    </a>
                    <a href="/files/resume.docx" rel="noopener noreferrer" target="_blank">
                        <Icon name="file word" size="large" color="blue"/>
                        Microsoft Word
                    </a>
                </Card.Content>
            </CardContent>
        </Card>
    )
};

export default AboutMeCard;

/**
 * <div className="ui fluid card">
            <div className="content">
                <div className="center aligned header"><h1>Adrian Ike Barranco</h1></div>
                <div className="center aligned description">
                    <p>
                        Variety IT specialist with over two years of experience in System Administration, Network Administration, CNOC Monitoring, troubleshooting 
                        and various coding languages. Trained to and deployed Cisco devices while deployed with the Utah Army National Guard. Currently going through 
                        Trilogies Coding bootcamp and Harvards introduction to computer science class.
                    </p>
                </div>
                </div>
                <div className="center aligned header">Resume</div>
                <div className="extra content">
                    <div className="center aligned">
                        <a href="/files/resume.pdf" rel="noopener noreferrer" target="_blank" className="col-sm-6"><i className="fas fa-file-pdf"></i>  PDF</a>
                        <a href="/files/Resume.docx" rel="noopener noreferrer" target="_blank" className="col-sm-6"><i className="fas fa-file-word"></i>  Word</a>
                    </div>
            </div>  
            <div className="extra content">
            </div>
        </div>
 */