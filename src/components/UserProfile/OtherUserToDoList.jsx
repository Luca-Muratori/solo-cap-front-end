import React, { useEffect, useState } from "react";
import SingleUserToDoComponent from "../Homepage/ToDoLists/SingleUserToDoComponent";

const OtherUserToDoList = ({ otherUser }) => {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    if (otherUser) {
      getToDos(otherUser);
    }
  }, []);

  const getToDos = async (otherUser) => {
    const response = await fetch(
      process.env.REACT_APP_URL + "/user/" + otherUser._id + "/toDos"
    );
    if (response.ok) {
      let data = await response.json();
      setToDos(data);
    }
  };
  return (
    <div id="UserToDoList">
      <div id="userToDoListHeader">
        <div className="d-flex justify-content-center">My to do list</div>{" "}
      </div>

      <div id="checkBoxUserToDoContainer">
        {toDos &&
          toDos.map((toDo) => (
            <SingleUserToDoComponent key={toDo._id} toDo={toDo} />
          ))}
      </div>
    </div>
  );
};

export default OtherUserToDoList;
