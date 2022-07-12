import React, { useEffect, useState } from "react";
import "./ToDoLists.css";
import SingleUserToDoComponent from "./SingleUserToDoComponent";
import UserToDoListAddButton from "./UserToDoListAddButton";

const UserToDoList = ({ user }) => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    getToDos(user);
  }, [user]);

  const getToDos = async (user) => {
    const response = await fetch(
      process.env.REACT_APP_URL + "/user/" + user._id + "/toDos",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      console.log("data", data);
      setToDos(data);
    } else {
      console.log("something went wrong");
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
          toDos
            .map((toDo) => (
              <>
                <SingleUserToDoComponent
                  key={toDo._id}
                  user={user}
                  toDo={toDo}
                />
                <hr style={{ width: "80%" }} />
              </>
            ))
            .reverse()}
      </div>
    </div>
  );
};

export default UserToDoList;
