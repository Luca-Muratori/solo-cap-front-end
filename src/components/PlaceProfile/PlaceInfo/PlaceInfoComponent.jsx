import React from "react";
import FollowPlaceButton from "./FollowPlaceButton";
import "./PlaceInfoComponent.css";

const PlaceInfoComponent = () => {
  return (
    <div id="placeInfoComponent">
      <div id="placeNameContainer">
        <div id="placeName">Place Name</div>
        <FollowPlaceButton />
      </div>

      <div>
        <div id="touristNumber">1000000</div>
        <div> Number of user that follow this place</div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam
        excepturi laborum laboriosam rerum omnis aliquid autem ipsam numquam
        voluptas architecto ullam sed modi alias inventore, incidunt impedit
        amet officiis, temporibus, vero doloribus a debitis atque? Ducimus
        deserunt sapiente eius vel dolores mollitia fugiat aut temporibus totam
        nostrum! Delectus, corporis.
      </div>
    </div>
  );
};

export default PlaceInfoComponent;
