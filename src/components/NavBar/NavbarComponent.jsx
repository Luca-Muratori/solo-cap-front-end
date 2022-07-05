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
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const NavbarComponent = () => {
  const [userLogin, setUserLogin] = useState(true);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

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
      <Navbar bg="light" expand="lg" className="navBar">
        <Navbar.Brand href="#home">TravelEasy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="nav">
          <Nav className="">
            <Nav.Link href="/home"> Home</Nav.Link>
            <NavDropdown title="Create a media" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Photo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog Post</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Event</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/placeProfile">PlaceProfile</Nav.Link>
          </Nav>
          <Form>
            <FormControl
              type="text"
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
                        <Col lg={2}>
                          <img
                            alt="userAvatar"
                            className="avatarSearchQuery"
                            src={user.avatar}
                          />
                        </Col>
                        <Col
                          lg={10}
                          style={{ marginTop: "1rem", paddingLeft: "0px" }}
                        >
                          {user.email}
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
          <Nav.Link href="/myProfile">MyProfile</Nav.Link>
          {userLogin ? (
            <Nav.Link onClick={handleLogout} href="/">
              Logout
            </Nav.Link>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarComponent;
