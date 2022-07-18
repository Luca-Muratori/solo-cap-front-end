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
        <Row>
          <Col lg={3}>
            <OtherUserToDoList user={otherUser} />
          </Col>
          <Col
            lg={9}
            style={{
              backgroundColor: "white",
              maxWidth: "70% ",
              borderRadius: "1rem",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
