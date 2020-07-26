import React from "react";
import Contact from "../../pages/Contact";
import {Card, Grid, Segment, Icon} from "semantic-ui-react";

function ContactCard()
{
    return (
        <Card fluid>
            <Card.Header as="h2" textAlign="center">Contact Me</Card.Header>
            <Card.Content>
                <Grid container>
                    <Grid.Column  mobile={16} tablet={8} computer={4}>
                        <Segment textAlign="center" basic><Icon name="clock" size="big" />Contact Times MST</Segment>
                        <Segment textAlign="center" basic>
                            <h3>Sun-Mon</h3>
                            <p>6:30 AM - 8:30 AM</p>
                            <p>5:00 PM - 9:30 PM</p>
                            <h3>Fri-Sat</h3>
                            <p>6:30 AM - 8:30 AM</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={8} computer={4}>
                        <Segment textAlign="center" basic><Icon name="phone square" size="big" />Phone</Segment>
                        <Segment textAlign="center" basic><h3>385-229-7480</h3></Segment>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={8} computer={4}>
                        <Segment textAlign="center" basic><Icon name="mail" size="big" />Email</Segment>
                        <Segment textAlign="center" basic><h3><a  href="mailto:barranco.ike@gmail.com?subject=Email%20Regarding%20Portfolio">barranco.ike@gmail.com</a></h3></Segment>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    );
};  

export default ContactCard;