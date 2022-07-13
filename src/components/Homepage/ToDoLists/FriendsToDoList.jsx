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
        style={{
          fontFamily: "Teko, sans-serif",
          fontWeight: "800",
          paddingTop: "10px",
        }}
      >
        Friends to do list
      </div>
      <div id="checkBoxFriendsToDoContainer">
        {toDos &&
          toDos.map((toDo) => (
            <>
              <SingleFriendsToDoComponent key={toDo._id} t toDo={toDo} />{" "}
            </>
          ))}
      </div>
    </div>
  );
};

export default FriendsToDoList;
