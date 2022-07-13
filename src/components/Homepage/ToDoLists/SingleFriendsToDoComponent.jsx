import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleFriendsToDoComponent = ({ toDo }) => {
  const [click, setClick] = useState(false);
  const [userMe, setUserMe] = useState([]);
  const [userMeToDoList, setUserMeToDoList] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getUserMe();
  }, []);

  const handleClick = () => {
    setClick(!click);
    if (click === true) {
      console.log(userMe);
      userMeToDoList.push(toDo);
      console.log("---------------");
      console.log("after the push", userMeToDoList);
    }
  };

  const getUserMe = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/user/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUserMe(data);
      setUserMeToDoList(userMe.userToDoList);
    }
  };

  //with this function I want to add a to do when the user click on the icon in the my friend component

  const addToDoToUserMeList = () => {};

  return (
    <>
      {userMe._id === toDo.userId[0]._id ? (
        <></>
      ) : (
        <>
          <Container className="row1">
            <Row>
              <Col lg={2}>
                <Link to={`/user/${toDo.userId[0]._id} `}>
                  <p className="friendToDoInfo">
                    <img alt="friend profile " src={toDo.userId[0].avatar} />{" "}
                  </p>
                </Link>
              </Col>
              <Col lg={8}>
                {" "}
                <p className="activityDescription">{toDo.title}</p>
                <p className="toDoWhere">{toDo.where}</p>
              </Col>
              <Col lg={2}>
                <div className="addToYourList">
                  <MdPlaylistAdd onClick={handleClick} />
                  <span className="tooltipAddIcon">
                    Add to your to do list
                  </span>{" "}
                </div>
              </Col>{" "}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default SingleFriendsToDoComponent;
