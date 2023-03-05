import NewStudentForm from "./NewStudentForm";
import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { API_URL } from "./constants";
import axios from "axios";


const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: API_URL,
            data: {
                pk: 0,
                name: name,
                email: email,
                document: document,
                phone: phone
            }
        })


    }
    return (
        <div className="create">
            <h2>Add a New Student</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="document">Document:</Label>
                    <Input
                        type="text"
                        name="document"
                        onChange={(e) => setDocument(e.target.value)}
                        value={document}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input
                        type="text"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        </div>
    );
}

export default Create;