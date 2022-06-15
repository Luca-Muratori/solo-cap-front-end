import React from "react";
import SinglePlaceToDoListComponent from "./SinglePlaceToDoListComponent.jsx";
import "./PlaceToDoListStyle.css";
import UserToDoListAddButton from "../../Homepage/ToDoLists/UserToDoListAddButton.jsx";
// in here we will se the friends to do for the particular place,
//ex. if we are in the london profile page we will see all the to do for this city

const PlaceToDoList = () => {
  return (
    <div className="placeToDoList">
      <div className="placeToDoListTitle">
        <div> Place ToDo List</div>
        <UserToDoListAddButton />
        <span className="tooltipAddIcon">
          Create a new to do for this place
        </span>
      </div>
      <div id="placeToListContainer">
        <SinglePlaceToDoListComponent />
        <SinglePlaceToDoListComponent />
        <SinglePlaceToDoListComponent />
      </div>
    </div>
  );
};

export default PlaceToDoList;
