import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { BsPatchPlus } from "react-icons/bs";

const UserToDoListAddButton = ({ user }) => {
  const [show, setShow] = useState(false);
  const [toDo, setToDo] = useState({
    title: "",
    where: "",
    description: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitToDo = async () => {
    console.log("to do", toDo);
    try {
      let response = await fetch(
        process.env.REACT_APP_URL + "/user/" + user._id + "/toDos",
        {
          method: "POST",
          body: JSON.stringify(toDo),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        handleClose();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="insert a title"
                value={toDo.title}
                onChange={(e) => setToDo({ ...toDo, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Where</Form.Label>
              <Form.Control
                type="text"
                placeholder="where this to will happen"
                value={toDo.where}
                onChange={(e) => setToDo({ ...toDo, where: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="put a brief description, not required"
                value={toDo.description}
                onChange={(e) =>
                  setToDo({ ...toDo, description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitToDo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserToDoListAddButton;
