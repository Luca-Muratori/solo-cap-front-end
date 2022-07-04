import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddPhotoComponent = ({ handleClose, user }) => {
  const [image, setImage] = useState("");

  const submitPhoto = async () => {
    try {
      const data = new FormData();
      data.append("photo", image);
      let response = await fetch(
        process.env.REACT_APP_URL + "/user/" + user._id + "/photos",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("photo added in your profile");
        handleClose();
      } else {
        alert("something went wrong");
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Modal.Header closeButton>
        <Modal.Title>Add a photo in your profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group id="formData">
          <Form.Label>Choose your Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitPhoto}>
          Add
        </Button>
      </Modal.Footer>
    </>
  );
};

export default AddPhotoComponent;
