import React from "react";
import { Form } from "react-bootstrap";

const SingleUserToDoComponent = ({ toDo }) => {
  return (
    <div className="checkBoxUserToDoList">
      <Form.Check type="checkbox" />
      <div className="activityInfo">
        <p className="activityDescription">{toDo.title}</p>
      </div>
    </div>
  );
};

export default SingleUserToDoComponent;
