import React, { useState } from 'react';
import {Form, Button, Card} from 'react-bootstrap';

const AdvisorCard = () => {
    return(
    <Card className="bg-dark text-white advisor-card" variant="dark">
        <Card.Body>
        <Card.Title>Get your personalised financial advice!</Card.Title>
            <Card.Text>
                Using Artificial Intelligence, gain deep insight into your spending habits and how you can improve!
            </Card.Text>
            <Button variant="light" href="#option1">Get Started!</Button>

        </Card.Body>
    </Card>
    )
}
export default AdvisorCard;

