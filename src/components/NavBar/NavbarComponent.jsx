import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "./NavbarComponent.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const NavbarComponent = () => {
  const [userLogin, setUserLogin] = useState(true);
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
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
