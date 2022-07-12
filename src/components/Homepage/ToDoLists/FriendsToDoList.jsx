import { useEffect, useState } from "react";
import SingleFriendsToDoComponent from "./SingleFriendsToDoComponent";
import "./ToDoLists.css";

const FriendsToDoList = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    getToDos();
  }, []);

  const getToDos = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/toDos", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let data = await response.json();
      setToDos(data);
    } else {
      console.log("to dos not found");
    }
  };

  return (
    <div id="FriendToDoList">
      <div
        className="d-flex justify-content-center"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        Friends to do list
      </div>
      <div id="checkBoxFriendsToDoContainer">
        {toDos &&
          toDos.map((toDo) => (
            <>
              <SingleFriendsToDoComponent toDo={toDo} />{" "}
              <hr style={{ width: "80%" }} />
            </>
          ))}
      </div>
    </div>
  );
};

export default FriendsToDoList;
