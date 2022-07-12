import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleFriendsToDoComponent = ({ toDo }) => {
  const [click, setClick] = useState(false);
  const [userMe, setUserMe] = useState([]);

  const token = localStorage.getItem("token");

  const handleClick = () => {
    setClick(!click);
    if (click === true) {
      userMe.userToDoList.push(toDo);
      console.log(userMe.userToDoList);
    }
  };

  useEffect(() => {
    getUserMe();
    console.log("user", userMe.userToDoList);
  }, []);

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
      console.log("id me", userMe._id);
    }
  };

  return (
    <Container>
      <Row>
        {userMe._id === toDo.userId[0]._id ? (
          <></>
        ) : (
          <>
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
          </>
        )}
      </Row>
    </Container>
    // <div className="singleToDoFriends">
    //   <div className="activityInfo">
    //     <p className="friendToDoInfo">
    //       <img alt="friend profile " src={toDo.userId[0].avatar} />
    //     </p>
    //     <div>
    //       {" "}
    //       <p className="activityDescription">{toDo.title}</p>
    //       <p className="toDoWhere">{toDo.where}</p>
    //     </div>

    //     <div className="addToUserToDo">
    //       {" "}
    //       <MdPlaylistAdd onClick={handleClick} />
    //       <span className="tooltipAddIcon">Add to your to do list</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SingleFriendsToDoComponent;
