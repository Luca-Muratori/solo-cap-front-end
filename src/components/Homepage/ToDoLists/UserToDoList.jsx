import React, { useEffect, useState } from "react";
import "./ToDoLists.css";
import SingleUserToDoComponent from "./SingleUserToDoComponent";
import UserToDoListAddButton from "./UserToDoListAddButton";

const UserToDoList = () => {
  const [me, setMe] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/user/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      let data = await response.json();
      setMe(data);
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <div id="UserToDoList">
      <div id="userToDoListHeader">
        <div className="toDoListTitle">My to do list</div>{" "}
        <div id="userToDoAddIcon">
          <UserToDoListAddButton user={me} />
          <span className="tooltipAddIcon">
            Create a new to do for your adventure
          </span>
        </div>
      </div>

      <div id="checkBoxUserToDoContainer">
        {me.userToDoList ? (
          me &&
          me.userToDoList
            .map((toDo) => (
              <div className="singleToDo">
                <SingleUserToDoComponent key={toDo._id} user={me} toDo={toDo} />
              </div>
            ))
            .reverse()
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserToDoList;
