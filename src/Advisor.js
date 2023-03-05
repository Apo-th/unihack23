import React, {useState, useRef} from 'react';
import {Button, Form, Card} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Advisor = () => {

        
    return (
            <Card className="bg-dark text-white advisor">
                <Card.Body>
                    <Card.Text>
                    <Typewriter onInit= {(typewriter) => {
                         typewriter.typeString('You suck at financial management lmao get better').start();}}/>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Advisor</Card.Title>
                    <Card.Text>
                        <Form>
                        <Form.Label>Advisor Response Type: Helpful - Rude</Form.Label>
                        <Form.Range/>
                        <Button variant="light" type="submit">
                            Get Advice
                        </Button>
                        </Form>
                    </Card.Text>
                </Card.Footer>
            </Card>
        )
    };
export default Advisor;