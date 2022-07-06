import React from "react";
import "./UserProfile.css";

const OtherUserInfo = ({ otherUser }) => {
  return (
    <div id="otherUserInfoContainer">
      <div style={{ width: "20%" }}>
        <img style={{ width: "100%" }} alt="user" src={otherUser.avatar} />
      </div>
      <div className="ml-5">
        <div>{otherUser.name}</div>
        <div>{otherUser.surname}</div>
      </div>
    </div>
  );
};

export default OtherUserInfo;
