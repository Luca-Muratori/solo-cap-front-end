import React from "react";
import "./ToDoLists.css";
import SingleUserToDoComponent from "./SingleUserToDoComponent";
import UserToDoListAddButton from "./UserToDoListAddButton";

const UserToDoList = () => {
  return (
    <div id="UserToDoList">
      <div id="userToDoListHeader">
        <div className="d-flex justify-content-center">My to do list</div>{" "}
        <div id="userToDoAddIcon">
          <UserToDoListAddButton />
          <span className="tooltipAddIcon">
            Create a new to do for your adventure
          </span>
        </div>
      </div>

      <div id="checkBoxUserToDoContainer">
        <SingleUserToDoComponent />
        <SingleUserToDoComponent />
        <SingleUserToDoComponent />
      </div>
    </div>
  );
};

export default UserToDoList;
