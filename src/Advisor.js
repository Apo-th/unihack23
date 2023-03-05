import React, {useState, useRef} from 'react';
import {Button, Form, Card} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Advisor = () => {
    const [start, setStart] = useState(false);
    const handleStart = setStart(true);
    const handleSubmit = (event) => {
        //Once the form is submitted, start the typewriter effect
        const form = event.currentTarget;
        handleStart();
        
      };
    const checkStart = (typewriter) => {
        while(!start){
        }
        typewriter.typeString('You suck at financial management lmao get better').start();

    }
        
    return (
            <Card className="bg-dark text-white advisor">
                <Card.Body>
                    <Card.Text>
                    <Typewriter onInit={checkStart}/>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Advisor</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleSubmit}>
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