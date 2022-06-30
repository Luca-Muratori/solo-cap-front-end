import React from "react";
import UserInfo from "./UserInfo";
import "./UserProfile.css";
import { Container, Row, Col } from "react-bootstrap";

const UserProfilePic = ({ user }) => {
  return (
    <div className="profilePics">
      <img
        id="profilePicBackground"
        alt="background"
        src="https://picsum.photos/200/300"
      />
      <Container id="profilePicUser">
        <Row>
          <Col className="pr-0" lg={3}>
            {" "}
            <img alt="user" src={user.avatar} />
          </Col>
          <Col className="pl-0" lg={5}>
            {" "}
            <UserInfo user={user} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfilePic;
