import React from "react";
import { Form } from "react-bootstrap";

const SingleUserToDoComponent = ({ toDo, user }) => {
  const handleDelete = () => {
    deleteToDo();
  };
  const deleteToDo = async () => {
    const response = await fetch(
      process.env.REACT_APP_URL + "/user/" + user._id + "/toDos/" + toDo._id,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <div key={toDo._id} className="checkBoxUserToDoList">
      <Form.Check type="checkbox" onClick={handleDelete} />
      <div className="activityInfo">
        <p className="activityDescription">{toDo.title}</p>
      </div>
    </div>
  );
};

export default SingleUserToDoComponent;
