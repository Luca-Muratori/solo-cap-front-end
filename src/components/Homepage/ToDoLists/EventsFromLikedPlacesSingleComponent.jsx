import React from "react";
import { MdPlaylistAdd } from "react-icons/md";

const EventsFromLikedPlacesSingleComponent = () => {
  return (
    <div>
      {" "}
      <div className="singleToDoFriends">
        <div className="activityInfo">
          <p className="friendToDoInfo">
            <img alt="friend profile " src="https://picsum.photos/200/300" />
          </p>
          <p className="activityDescription">go to that museum</p>
          <div className="addToUserToDo">
            {" "}
            <MdPlaylistAdd />
            <span className="tooltipAddIcon">Add to your to do list</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsFromLikedPlacesSingleComponent;
