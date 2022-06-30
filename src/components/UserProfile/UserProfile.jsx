import React, { useEffect, useState } from "react";
import UserProfilePicAndInfo from "./UserProfilePicAndInfo.jsx";
import { Container, Row, Col } from "react-bootstrap";
import UserToDoList from "../Homepage/ToDoLists/UserToDoList.jsx";
import EventsFromLikedPlacesComponent from "../Homepage/ToDoLists/EventsFromLikedPlacesComponent.jsx";
import PhotosComponent from "./PhotosComponent.jsx";
import { MdAddAPhoto } from "react-icons/md";
import { useSelector } from "react-redux";
import { setLoggedUser } from "../../redux/actions.js";

const UserProfile = () => {
  const [user, setUser] = useState({});
  // const user = useSelector((state) => state.user);
  // console.log("state user", user);
  const token = localStorage.getItem("token");

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/user/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
      console.log(data);
    }
  };

  return (
    <div>
      <UserProfilePicAndInfo user={user} />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2}>
            <UserToDoList />
            <EventsFromLikedPlacesComponent />
          </Col>
          <Col lg={10}>
            <div className="d-flex ">
              <div id="photoTitle">Look at your photo</div>
              <div className="tooltipMyProfile">
                <MdAddAPhoto className="AddAPhotoIconMyProfile" />
                <span className="tooltipText">Add a photo in your profile</span>
              </div>
            </div>

            <PhotosComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
