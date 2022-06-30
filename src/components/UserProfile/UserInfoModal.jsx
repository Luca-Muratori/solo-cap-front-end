import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UserInfoModal = ({ show, handleClose, user }) => {
  let profile = user;
  const [profileDetails, setProfileDetails] = useState({
    name: profile.name,
    surname: profile.surname,
    email: profile.email,
    avatar: profile.avatar,
  });
  const handleChangeInfo = (profileDetails) => {
    updateProfile(profileDetails);
    handleClose();
  };
  const updateProfile = async (profile) => {
    console.log(profile);
    let res = await fetch("https://solo-capstone.herokuapp.com/user/me", {
      method: "PUT",
      body: JSON.stringify(profileDetails),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (res.ok) {
      alert("updated");
      uploadAvatar();
    }
  };

  const uploadAvatar = async (profile) => {
    try {
      const data = new FormData();
      data.append("avatar", user.avatar);
      const response = await fetch(
        `https://solo-capstone.herokuapp.com/user/${profile._id}/uploadAvatar`,
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

  return (
    <Modal id="userModalAddInfo" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* NAME  */}
          <Form.Group>
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write here"
              className="mt-1"
              required
              defaultValue={user.name}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          {/* SURNAME  */}
          <Form.Group>
            <Form.Label>Your surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write here"
              className="mt-1"
              required
              defaultValue={user.surname}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  surname: e.target.value,
                })
              }
            />
          </Form.Group>
          {/* EMAIL  */}
          <Form.Group>
            <Form.Label>Your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Write here"
              className="mt-1"
              required
              defaultValue={profileDetails.email}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  email: e.target.value,
                })
              }
            />
          </Form.Group>

          {/* IMAGE  */}
          <Form.Group>
            <Form.Label>Your avatar</Form.Label>
            <Form.Control
              type="file"
              placeholder="Write here"
              className="mt-1"
              defaultValue={profileDetails.avatar}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  avatar: e.target.value,
                })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleChangeInfo}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserInfoModal;
