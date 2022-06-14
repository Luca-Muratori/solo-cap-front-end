import React from "react";
import { Form } from "react-bootstrap";

const SingleUserToDoComponent = () => {
  return (
    <div className="checkBoxUserToDoList">
      <Form.Check type="checkbox" />
      <div className="activityInfo">
        <p className="activityDescription">go to that museum</p>
      </div>
    </div>
  );
};

export default SingleUserToDoComponent;
