import React from "react";
import IconHeader from "../IconHeader.js";
import {Card, Grid, Segment, Icon, Header} from "semantic-ui-react";

function ContactCard()
{
    return (
        <Card fluid>
            <Card.Header as="h2" textAlign="center">Contact Me</Card.Header>
            <Card.Content>
                <Grid container>
                    <Grid.Column  mobile={16} tablet={8} computer={5}>
                        <IconHeader name="clock" size="big" text="Contact Times MST" />
                        <Segment textAlign="center" basic>
                            <h3>Sun-Mon</h3>
                            <p>6:30 AM - 8:30 AM</p>
                            <p>5:00 PM - 9:30 PM</p>
                            <h3>Fri-Sat</h3>
                            <p>6:30 AM - 8:30 AM</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={8} computer={6}>
                        <IconHeader name="phone volume" size="large" text="Phone" />
                        <Segment textAlign="center" basic><Header as="h3" content="385-229-7480" /></Segment>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={8} computer={5}>
                        <IconHeader name="mail" size="big" text="Email" />
                        <Segment textAlign="center" basic>
                        <Header as="a" size="big" content="barranco.ike@gmail.com" href="mailto:barranco.ike@gmail.com?subject=Email%20Regarding%20Portfolio" color="blue" />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    );
};  

export default ContactCard;