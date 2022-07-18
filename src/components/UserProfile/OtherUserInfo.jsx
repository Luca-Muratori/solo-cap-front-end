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
          <Col lg={3} className="pr-0" style={{ maxWidth: "20%" }}>
            <img
              style={{ borderRadius: "50%", width: "70%", height: "100%" }}
              alt="user"
              src={otherUser.avatar}
            />
          </Col>
          <Col className="pl-0" lg={5}>
            <div className="otherUserInfo">
              <div style={{ marginRight: "10px" }}>{otherUser.name}</div>
              <div>{otherUser.surname}</div>
            </div>
            <div
              style={{
                height: "87px",
                backgroundColor: "white",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "1rem",
              }}
            >
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
                  <div style={{ fontSize: "25px", marginTop: "10px" }}>
                    {otherUser.photos?.length}
                  </div>
                  <div style={{ fontSize: "18px" }}>Photos</div>
                </div>
                <div>
                  <div style={{ fontSize: "25px", marginTop: "10px" }}>
                    {otherUser.userToDoList?.length}
                  </div>
                  <div style={{ fontSize: "18px" }}>To-do</div>
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
