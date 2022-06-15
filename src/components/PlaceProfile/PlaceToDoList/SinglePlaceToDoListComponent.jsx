import React from "react";
import { MdPlaylistAdd } from "react-icons/md";
import "./PlaceToDoListStyle.css";

const SinglePlaceToDoListComponent = () => {
  return (
    <div className="SinglePlaceToDoListComponentStyle">
      <div>
        <img
          alt="place profile pic"
          src="https://picsum.photos/200/300"
          className="placeProfilePic"
        />
      </div>
      <p className="">go to that museum</p>
      <div className="placeToDoAddIcon">
        {" "}
        <MdPlaylistAdd />
        <span className="placeToDoAddIconTooltip">Add to your to do list</span>
      </div>
    </div>
  );
};

export default SinglePlaceToDoListComponent;
