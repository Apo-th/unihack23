import React from "react";
import { useState } from "react";
import { Col, Form, FormGroup, Input, Label, FormText } from "reactstrap";
import { Button, Card } from "react-bootstrap";
import { API_URL_RECEIPT } from "./constants";
import axios from "axios";
import Webcam from "react-webcam";

const Create = () => {
  const [photo, setPhoto] = useState(null);
  const [pendingPhoto, setPendingPhoto] = useState(false);

  // Handle POST request
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', photo);
    axios.post(API_URL_RECEIPT, {"cumMan" : "cumCum"}, 
      {headers: {'Content-Type': 'application/json'}})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    
  }

  // Screenshot dimensions
  const videoConstraints = {
    width: 240,
    height: 240,
    facingMode: "user"
  };

  function handlePhoto(e) {
    setPhoto(e.target.files[0]);
    setPendingPhoto(true);
  }

  return (
    <>
      <Card className="bg-dark text-white create">
        <Form onSubmit={handleSubmit}>
        <h2>Add a receipt</h2>
            <FormGroup >
              <Label for="exampleFile" sm={2}>File</Label>
              <Col sm={10}>
                <Input type="file" name="photo"
                  onChange={handlePhoto}
                />
                <FormText color="muted">
                  Add a photo from your files
                </FormText>
                <FormGroup>
                <Webcam
                  audio={false}
                  height={240}
                  screenshotFormat="image/jpeg"
                  width={240}
                  videoConstraints={videoConstraints}
                >
                  {({ getScreenshot }) => (
                    <Button className="primary"
                      onClick={
                        (e) => {
                          const imageSrc = getScreenshot()
                          setPhoto(imageSrc)
                          setPendingPhoto(true)
                        }}
                    >
                      Capture photo
                    </Button>
                  )}
                </Webcam>
                </FormGroup>
              </Col>
            </FormGroup>
            <Button className="secondary" type="submit">Send</Button>
        </Form>
      </Card>
      <Card className="bg-dark text-white photo">
        {!pendingPhoto && <h2>Pending Photo:</h2>}
        {pendingPhoto && <h2>Photo Preview:</h2>}
          {pendingPhoto && <img className="preview" src={photo} alt="" width="240" height="240"/> }
      </Card>

    </>
  );
}

export default Create;