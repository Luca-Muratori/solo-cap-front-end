import React from "react";
import UserProfilePicAndInfo from "./UserProfilePicAndInfo.jsx";
import { Container, Row, Col } from "react-bootstrap";
import UserToDoList from "../Homepage/ToDoLists/UserToDoList.jsx";
import EventsFromLikedPlacesComponent from "../Homepage/ToDoLists/EventsFromLikedPlacesComponent.jsx";
import PhotosComponent from "./PhotosComponent.jsx";
import { MdAddAPhoto } from "react-icons/md";

const UserProfile = () => {
  return (
    <div>
      <UserProfilePicAndInfo />
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
