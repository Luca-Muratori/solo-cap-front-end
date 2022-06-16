import React from "react";
import "./WelcomePageComponent.css";
import { Container, Row, Col } from "react-bootstrap";
import LoginComponent from "./LoginComponent";
import CreateAnAccount from "./CreateAnAccount";

const WelcomePageComponent = () => {
  return (
    <div id="bgImg">
      <Container>
        <Row>
          <Col lg={6}>
            <h1 id="jumbotronTitle">Welcome to TravelEasy</h1>
            <p>
              In this site you will see all the place of the world, see what
              your friends have planned, and create your own to do list
            </p>
          </Col>
          <Col lg={4}>
            <LoginComponent />
            <CreateAnAccount />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePageComponent;
