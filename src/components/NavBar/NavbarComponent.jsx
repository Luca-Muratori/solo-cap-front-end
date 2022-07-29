import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./NavbarComponent.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const NavbarComponent = () => {
  const [userLogin, setUserLogin] = useState(true);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    getUsers();
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/user/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
    }
  };

  const getUsers = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/user", {
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      let data = await response.json();
      setUsers(data);
    } else {
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserLogin(false);
  };
  return (
    <>
      <Navbar expand="lg" className="navBar d-flex justify-content-between">
        <Navbar.Brand href="/home">
          <img
            style={{ maxWidth: "30%" }}
            alt="logo"
            src="https://img.icons8.com/clouds/100/000000/globe--v2.png"
          />
          TravelEasy
        </Navbar.Brand>
        <Navbar.Toggle style={{ backgroundColor: "white" }} />
        <div className="avatarImgNavBar" style={{ display: "flex" }}>
          {" "}
          <img
            id="userAvatarNav"
            alt="user"
            style={{
              width: "37px",
              borderRadius: "2rem",
              height: "37px",
            }}
            src={user.avatar}
          />
          <NavDropdown id="basic-nav-dropdown">
            {userLogin ? (
              <>
                <NavDropdown.Item href="/myProfile">
                  View Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout} href="/">
                  Logout
                </NavDropdown.Item>
              </>
            ) : (
              ""
            )}
          </NavDropdown>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Form>
            <FormControl
              type="text"
              style={{ borderRadius: ".7rem" }}
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => setQuery(e.target.value)}
            />
            {query.length > 1 ? (
              <Container className="searchQuery">
                <Row>
                  {users
                    .filter((user) => user.email.toLowerCase().includes(query))
                    .map((user) => (
                      <>
                        <Col xs={2} sm={2} lg={2}>
                          <a href={`/user/${user._id}`}>
                            <img
                              alt="userAvatar"
                              className="avatarSearchQuery"
                              src={user.avatar}
                            />
                          </a>
                        </Col>
                        <Col
                          xs={10}
                          sm={10}
                          lg={10}
                          className="searchResultEmail"
                          style={{ marginTop: "1rem", paddingLeft: "0px" }}
                        >
                          <a
                            className="searchResult"
                            href={`/user/${user._id}`}
                          >
                            {" "}
                            {user.email}
                          </a>
                        </Col>
                        <hr style={{ color: "black" }} />
                      </>
                    ))}
                </Row>
              </Container>
            ) : (
              <></>
            )}
          </Form>
          <div
            id="avatarPlusLogout"
            style={{ display: "flex", alignItems: "center", width: "20%" }}
          ></div>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarComponent;
