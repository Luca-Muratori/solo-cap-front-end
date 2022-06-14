import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalForAddAToDo from "./ModalForAddAToDo";
import { BsPatchPlus } from "react-icons/bs";

const UserToDoListAddButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="addToDoUser" variant="primary" onClick={handleShow}>
        <BsPatchPlus />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a to do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForAddAToDo />
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
    </>
  );
};

export default UserToDoListAddButton;
