import React, { useState } from 'react';
import {Form, Button, Card} from 'react-bootstrap';

const AtAGlanceCard = () => {
    return(
    <Card className="bg-dark text-white ataglance-card" variant="dark">
        <Card.Img variant="top" src="holder.js/100px150" />
        <Card.Body>
        <Card.Title>At a glance</Card.Title>
            <Card.Text>
                Total Spending: $1000
            </Card.Text>
            <Button variant="light" href="#data">View More</Button>
        </Card.Body>
    </Card>
    )
}
export default AtAGlanceCard;
