import React from "react";
import { Form } from "react-bootstrap";

const OtherUserSingleToDo = ({ toDo, user }) => {
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
      <div style={{ paddingLeft: "20px" }} className="activityInfo">
        <p className="activityDescription">{toDo.title}</p>
        <p className="toDoWhere">{toDo.where}</p>
      </div>
    </div>
  );
};

export default OtherUserSingleToDo;
