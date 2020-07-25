import React from "react";
import Contact from "../../pages/Contact";
import {Card, Grid, Segment, Icon} from "semantic-ui-react";

function ContactCard()
{
    return (
        <Card fluid>
            <Card.Header as="h2" textAlign="center">Contact Me</Card.Header>
            <Card.Content>
                <Grid container columns={3}>
                    <Grid.Column>
                        <Segment textAlign="center" basic><Icon name="clock" size="big" />Contact Times</Segment>
                        <Segment textAlign="center" basic>Contact Times</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment textAlign="center" basic><Icon name="phone square" size="big" />Email</Segment>
                        <Segment textAlign="center" basic>Contact Times</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment textAlign="center" basic><Icon name="mail" size="big" />Phone</Segment>
                        <Segment textAlign="center" basic>Contact Times</Segment>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    );
};  

export default ContactCard;