import React from "react";
import "./WelcomePageComponent.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import CreateAnAccount from "./CreateAnAccount";

const WelcomePageComponent = () => {
  return (
    <div id="bgImg">
      <Container fluid id="containerWelcome">
        <Row>
          <Col sm={12} lg={4} style={{ maxHeight: "100vh" }}>
            <LoginComponent />

            <Link to="/registration">
              <CreateAnAccount />
            </Link>
          </Col>
          <Col className="px-0" sm={0} style={{ order: "-1" }}>
            <img
              style={{
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
                maxHeight: "100vh",
              }}
              alt="welcome"
              src="https://picsum.photos/200/300"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePageComponent;
