import React, { useEffect, useState } from "react";
import UserProfilePicAndInfo from "./UserProfilePicAndInfo.jsx";
import { Container, Row, Col, Modal } from "react-bootstrap";
import UserToDoList from "../Homepage/ToDoLists/UserToDoList.jsx";
import EventsFromLikedPlacesComponent from "../Homepage/ToDoLists/EventsFromLikedPlacesComponent.jsx";
import PhotosComponent from "./PhotosComponent.jsx";
import { MdAddAPhoto } from "react-icons/md";
import { useSelector } from "react-redux";
import { setLoggedUser } from "../../redux/actions.js";
import AddPhotoComponent from "./AddPhotoComponent.jsx";

const UserProfile = () => {
  const [user, setUser] = useState({});
  // const user = useSelector((state) => state.user);
  // console.log("state user", user);
  const token = localStorage.getItem("token");
  const accessToken = localStorage.getItem("accessToken");

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/user/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token || accessToken,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
    } else {
      console.log(token);
      console.log(accessToken);
    }
  };

  return (
    <div>
      <UserProfilePicAndInfo user={user} />
      <Container fluid className="mt-3">
        <Row id="rowProfileUser">
          <Col lg={3} sm={12} id="toDoContainerForResponsiveness">
            <UserToDoList user={user} />
          </Col>
          <Col id="containerPhoto" lg={9} sm={12} style={{}}>
            <div className="photoTitleResponsiveness d-flex ">
              <div id="photoTitle">Look at your photo</div>
              <div className="tooltipMyProfile">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/add-image.png"
                  alt="add"
                  onClick={handleShow}
                  className="AddAPhotoIconMyProfile"
                />
                <Modal className="mt-5" show={show} onHide={handleClose}>
                  {" "}
                  <AddPhotoComponent user={user} handleClose={handleClose} />
                </Modal>

                <span className="tooltipText">Add a photo in your profile</span>
              </div>
            </div>

            <PhotosComponent user={user} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
