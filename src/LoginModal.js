import React, { useState } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';

const LoginModal = () => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            setValidated(true);
            handleClose();   
        }
      };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>
            <Modal show={show} onHide={handleClose} enforceFocus backdrop="static">
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated}  onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required/>
                            <Form.Text className="text-muted">
                               Enter your name to get your personalised data
                            </Form.Text>
                           
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default LoginModal;
