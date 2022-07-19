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
      <Container fluid>
        <Row style={{ paddingInline: "6rem" }}>
          <Col lg={3}>
            <OtherUserToDoList user={otherUser} />
          </Col>
          <Col
            lg={9}
            style={{
              backgroundColor: "white",
              maxWidth: "70% ",
              borderRadius: "1rem",
            }}
          >
            <div className="d-flex ">
              <div id="photoTitle">Look at the photos</div>
            </div>
            <PhotosComponent user={otherUser} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UsersProfileFromSearch;
