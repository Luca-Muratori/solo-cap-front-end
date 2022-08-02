import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserProfilePicAndInfo from "./UserProfilePicAndInfo";
import { Container, Row, Col } from "react-bootstrap";
import OtherUserToDoList from "./OtherUserToDoList";
import PhotosComponent from "./PhotosComponent";
import OtherUserInfo from "./OtherUserInfo";

const UsersProfileFromSearch = () => {
  const [otherUser, setOtherUser] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    if (userId) {
      const response = await fetch(
        process.env.REACT_APP_URL + "/user/" + userId,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setOtherUser(data);
      }
    }
  };

  return (
    <div>
      <OtherUserInfo otherUser={otherUser} />
      <Container
        className="containerOtherUserToDoPhoto"
        fluid
        style={{ paddingInline: "6rem" }}
      >
        <Row>
          <Col lg={3} sm={12}>
            <OtherUserToDoList user={otherUser} />
          </Col>
          <Col lg={9} sm={12}>
            <div
              id="photoComponentOtherUser"
              style={{
                backgroundColor: "white",
                maxWidth: "100% ",
                borderRadius: "1rem",
                paddingLeft: "10px",
              }}
            >
              <div className="d-flex ">
                <div id="photoTitle">Look at the photos</div>
              </div>
              <PhotosComponent user={otherUser} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UsersProfileFromSearch;
