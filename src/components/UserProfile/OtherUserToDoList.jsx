import React, { useEffect, useState } from "react";
import OtherUserSingleToDo from "../Homepage/ToDoLists/OtherUserSingleToDo";
import SingleUserToDoComponent from "../Homepage/ToDoLists/SingleUserToDoComponent";

const OtherUserToDoList = ({ user }) => {
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
      console.log(toDos);
    }
  };
  return (
    <div id="UserToDoList">
      <div
        style={{
          textAlign: "center",
          fontFamily: "Teko, sans-serif",
          fontWeight: "800",
          paddingTop: "17px",
        }}
      >
        My to do list
      </div>{" "}
      <div id="checkBoxUserToDoContainer">
        {toDos &&
          toDos.map((toDo) => (
            <OtherUserSingleToDo key={toDo._id} toDo={toDo} />
          ))}
      </div>
    </div>
  );
};

export default OtherUserToDoList;
