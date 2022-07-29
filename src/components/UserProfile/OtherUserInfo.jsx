import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./UserProfile.css";

const OtherUserInfo = ({ otherUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="otherUserInfoContainer">
      <Container>
        <Row>
          <Col
            lg={3}
            sm={12}
            className="pr-0 otherUserAvatar"
            style={{
              maxWidth: "20%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ borderRadius: "50%", width: "70%", height: "100%" }}
              alt="user"
              src={otherUser.avatar}
            />
          </Col>
          <Col className="pl-0" lg={5} sm={12}>
            <div className="otherUserInfo">
              <div style={{ marginRight: "10px" }}>{otherUser.name}</div>
              <div>{otherUser.surname}</div>
            </div>
            <div
              style={{
                height: "87px",
                backgroundColor: "#c7ede6",
                borderRadius: "1rem",
                marginLeft: "52px",
              }}
              className="otherUserNumberPhotoToDo"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  fontSize: "18px",
                }}
              >
                <div>
                  <div style={{ marginTop: "10px" }}>
                    {otherUser.photos?.length}
                  </div>
                  <div>Photos</div>
                </div>
                <div>
                  <div style={{ marginTop: "10px" }}>
                    {otherUser.userToDoList?.length}
                  </div>
                  <div>To-do</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    //   <div className="ml-5">

    //   </div>
    // </div>
  );
};

export default OtherUserInfo;
