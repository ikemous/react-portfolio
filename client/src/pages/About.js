import React from "react";
import Wrapper from "../components/Wrapper.js";
import PortfolioImage from "../components/PortfolioImage.js";
import CardGroup from "../components/CardGroup.js";
import EmploymentCard from "../components/EmploymentCard.js";

function About()
{
    return (
        <Wrapper>
            <PortfolioImage />
            <CardGroup>
                <div className="ui fluid card">
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
                <EmploymentCard />
            </CardGroup>
        </Wrapper>
    )
};

export default About;

/**
 * USED TO PUSH ITEMS TO THE SIDE
 * $('.ui.sidebar')
  .sidebar('toggle')
;

 */