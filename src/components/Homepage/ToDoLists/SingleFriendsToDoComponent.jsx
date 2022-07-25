import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";

const SingleFriendsToDoComponent = ({ toDo }) => {
  const [click, setClick] = useState(false);
  const [userMe, setUserMe] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getUserMe();
  }, []);

  const handleClick = () => {
    setClick(!click);
    if (click === true) {
      addToDo(toDo);
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
    }
  };

  //with this function I want to add a to do when the user click on the icon in the my friend component
  const addToDo = async (toDo) => {
    delete toDo._id;
    delete toDo.__v;
    delete toDo.userId[0];

    try {
      let response = await fetch(
        process.env.REACT_APP_URL + "/user/" + userMe._id + "/toDos",
        {
          method: "POST",
          body: JSON.stringify({ ...toDo, userId: [userMe] }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        window.location.reload();
        // handleClose();
      } else {
        console.log("1", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userMe._id === toDo.userId[0]?._id ? (
        <></>
      ) : (
        <>
          <Container className="row1">
            <Row>
              <Col lg={2} className="userPicToDo">
                <Link to={`/user/${toDo.userId[0]._id} `}>
                  <p className="friendToDoInfo">
                    <img alt="friend profile " src={toDo.userId[0].avatar} />{" "}
                  </p>
                </Link>
              </Col>
              <Col lg={6} className="toDoBody">
                {" "}
                <p className="activityDescription">{toDo.title}</p>
                <p className="toDoWhere">{toDo.where}</p>
              </Col>
              <Col lg={3} className="addIconToDoResponsiveness">
                <div className="addToYourList">
                  <BsFillPlusCircleFill className="add" onClick={handleClick} />
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
