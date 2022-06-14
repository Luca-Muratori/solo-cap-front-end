import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MainComponent from "./MainComponent/MainComponent";
import ToDoListComponent from "./ToDoLists/ToDoListComponent";

const HomepageComponent = () => {
  return (
    <>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <Col lg={3}>
            <ToDoListComponent />
          </Col>
          <Col lg={9}>
            <MainComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomepageComponent;
