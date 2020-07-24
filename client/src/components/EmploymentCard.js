import React from "react";
import {Card, List} from "semantic-ui-react";

function EmploymentCard()
{
    return (
        <Card fluid>
            <Card.Header as="h2" textAlign="center">Employment</Card.Header>
            <Card.Content>
                <List bulleted>
                    <List.Header as="h3">NOC Monitoring Specialist</List.Header>
                    <Card.Meta>Jan 2020 - Current</Card.Meta>
                    <List.Item >Verify issues are occurring using SolarWinds, NetCool and LiveNX</List.Item>
                    <List.Item>Use networking devices to troubleshoot and find more information on downed items</List.Item>
                    <List.Item>Use ServiceNow to create/track issues</List.Item>
                    <List.Item>Communicate with various Internet Service Providers for connection verification</List.Item>
                    <List.Item>Create tickets using Internet Service Provider ticketing systems</List.Item>
                    <List.Item>Actively communicate with multiple IT deparments</List.Item>
                    <List.Item>Conduent CNOC SharePoint Committee member</List.Item>
                </List>
            </Card.Content>
        </Card>
    );  
};  
export default EmploymentCard;
