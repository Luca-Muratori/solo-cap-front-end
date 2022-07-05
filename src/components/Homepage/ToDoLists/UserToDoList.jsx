import React, { useEffect, useState } from "react";
import "./ToDoLists.css";
import SingleUserToDoComponent from "./SingleUserToDoComponent";
import UserToDoListAddButton from "./UserToDoListAddButton";

const UserToDoList = ({ user }) => {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    if (user) {
      getToDos(user);
    }
  }, []);

  const getToDos = async (user) => {
    const response = await fetch(
      process.env.REACT_APP_URL + "/user/" + user._id + "/toDos"
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
        <div id="userToDoAddIcon">
          <UserToDoListAddButton user={user} />
          <span className="tooltipAddIcon">
            Create a new to do for your adventure
          </span>
        </div>
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

export default UserToDoList;
