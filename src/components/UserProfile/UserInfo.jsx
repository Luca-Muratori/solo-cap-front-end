import React, { useState } from "react";
import "./UserProfile.css";
import { CgUserList } from "react-icons/cg";
import UserInfoModal from "./UserInfoModal";

const UserInfo = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="UserInfoContainer">
      <div>
        <div>
          {user.name && user.surname ? (
            <div>
              {user.name} {user.surname}
            </div>
          ) : (
            <div> click on the icon to add your info</div>
          )}
        </div>
        <div></div>
        {/* <div>Friends: {user.friends.length}</div> */}
      </div>
      <div>
        <CgUserList id="userModifyInfoIcon" onClick={handleShow} />
        <span className="placeToDoAddIconTooltip">
          Create a new to do for your adventure
        </span>
        <UserInfoModal user={user} show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default UserInfo;
