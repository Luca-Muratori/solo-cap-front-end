import React from "react";
import { Form } from "react-bootstrap";

const ModalForAddAToDo = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Where</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>When</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default ModalForAddAToDo;
