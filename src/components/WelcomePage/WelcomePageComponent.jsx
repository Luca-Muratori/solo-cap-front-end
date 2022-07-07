import React from "react";
import "./WelcomePageComponent.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import CreateAnAccount from "./CreateAnAccount";

const WelcomePageComponent = () => {
  return (
    <div id="bgImg">
      <img
        id="imgWelcome"
        alt="welcome"
        src="https://res.cloudinary.com/dar1jmjxk/image/upload/v1657197644/photos/p1ktit78zmmf0fupk7fb.png"
      />
      <Container id="containerWelcome">
        <Row>
          <Col sm={0} lg={7}>
            <h1 id="jumbotronTitle">Welcome to TravelEasy</h1>

            <p id="jumbotronaDescription">
              In this site you will see all the place of the world, see what
              your friends have planned, and create your own to do list
            </p>
          </Col>
          <Col sm={12} lg={5}>
            <LoginComponent />

            <Link to="/registration">
              <CreateAnAccount />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePageComponent;
