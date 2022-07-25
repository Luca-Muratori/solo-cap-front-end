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
    <div>
      {user.name && user.surname ? (
        <div className="userInfo" style={{ marginLeft: "20px" }}>
          <div
            style={{
              fontSize: "40px",
              fontFamily: "Teko, sans-serif",
              fontWeight: "800",
            }}
          >
            {user.name} {user.surname}
          </div>
          <div id="UserInfoContainer">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <div style={{ fontSize: "25px" }}>{user.photos.length}</div>
                <div>Photos</div>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <div style={{ fontSize: "25px" }}>
                  {user.userToDoList.length}
                </div>
                <div>To-do</div>
              </div>
            </div>
            <div>
              <img
                src="https://img.icons8.com/clouds/100/000000/info.png"
                alt="change User info"
                id="userModifyInfoIcon"
                onClick={handleShow}
              />
              <span className="placeToDoAddIconTooltip">
                Create a new to do for your adventure
              </span>
              <UserInfoModal
                user={user}
                show={show}
                handleClose={handleClose}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div> click on the icon to add your info</div>
          <div>
            <img
              src="https://img.icons8.com/clouds/100/000000/info.png"
              alt="change User info"
              id="userModifyInfoIcon"
              onClick={handleShow}
            />
            <span className="placeToDoAddIconTooltip">
              Create a new to do for your adventure
            </span>
            <UserInfoModal user={user} show={show} handleClose={handleClose} />
          </div>
        </div>
      )}
      {/* <div>Friends: {user.friends.length}</div> */}
    </div>
  );
};

export default UserInfo;
