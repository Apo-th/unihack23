import NewStudentForm from "./NewStudentForm";
import React from "react";
import { useState } from "react";
import {Col, Button, Form, FormGroup, Input, Label, FormText } from "reactstrap";
import { API_URL } from "./constants";
import axios from "axios";
import Webcam from "react-webcam";
import WebcamCapture from "./WebcamCapture";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [photo, setPhoto] = useState(null);

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

            // Screenshot
            const videoConstraints = {
                width: 1280,
                height: 720,
                facingMode: "user"
              };

              function handlePhoto(e) {
                console.log(e.target.files);
                setPhoto(URL.createObjectURL(e.target.files[0]));
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
                <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="photo" 
            onChange={handlePhoto}
            />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
            <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={720}
      videoConstraints={{
        width: 720,
        height: 720,
        facingMode: "user"
      }}
    >
      {({ getScreenshot }) => (
        <button
          onClick={
            (e) => {
                const imageSrc = getScreenshot()
                setPhoto(imageSrc)
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
          </Col>
        </FormGroup>
                <Button>Send</Button>
            </Form>
        <div className="example">
        <div>
            <img className="preview" src={photo} alt="" />
          </div>
        </div>
        </div>
    );
}

export default Create;