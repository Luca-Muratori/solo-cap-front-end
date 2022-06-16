import React from "react";
import "./UserProfile.css";
import { CgUserList } from "react-icons/cg";

const UserInfo = () => {
  return (
    <div id="UserInfoContainer">
      <div>
        <div>Name Surname</div>
        <div>Age</div>
        <div>Friends: 10000</div>
        <div>Visited place:1000</div>
      </div>
      <div>
        <CgUserList id="userModifyInfoIcon" />
        <span className="placeToDoAddIconTooltip">
          Create a new to do for your adventure
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
