import React, { useState } from "react";
import AddAPhotoButton from "./AddAPhotoButton";
import { MdAddAPhoto } from "react-icons/md";
import "./UserAddAPhoto.css";
import { Button, Modal, Form } from "react-bootstrap";

const AddAPhotoComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="ml-3" onClick={handleShow}>
        <MdAddAPhoto id="addAPhotoComponent" />
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Choose a picture"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AddAPhotoComponent;
