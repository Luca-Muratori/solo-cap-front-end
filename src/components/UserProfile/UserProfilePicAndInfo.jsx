import React, { useState } from "react";
import UserInfo from "./UserInfo";
import "./UserProfile.css";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

const UserProfilePic = ({ user }) => {
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState({ avatar: user.avatar });

  const uploadAvatar = async () => {
    try {
      const data = new FormData();
      data.append("avatar", avatar);
      const response = await fetch(
        `https://solo-capstone.herokuapp.com/user/${user._id}/uploadAvatar`,
        {
          method: "PUT",
          body: data,
        }
      );
      if (response.ok) {
        console.log("Image Successfully Uploaded");
        handleClose();
      } else {
        console.error("image uploading failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <img alt="user" onClick={handleShow} src={user.avatar} />
            {/* Modal to change the avatar */}{" "}
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Control
                    type="file"
                    onChange={(e) => {
                      setAvatar(e.target.files[0]);
                    }}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={uploadAvatar}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
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
