import React from "react";
import EventsFromLikedPlacesSingleComponent from "./EventsFromLikedPlacesSingleComponent";

const EventsFromLikedPlacesComponent = () => {
  return (
    <div id="eventsToDoList">
      <div className="d-flex justify-content-center">
        Events From Liked Places
      </div>
      <EventsFromLikedPlacesSingleComponent />{" "}
      <EventsFromLikedPlacesSingleComponent />{" "}
      <EventsFromLikedPlacesSingleComponent />{" "}
      <EventsFromLikedPlacesSingleComponent />{" "}
    </div>
  );
};

export default EventsFromLikedPlacesComponent;
