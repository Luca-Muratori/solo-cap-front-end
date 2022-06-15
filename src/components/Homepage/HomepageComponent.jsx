import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MainComponent from "./MainComponent/MainComponent";
import ToDoListComponent from "./ToDoLists/ToDoListComponent";

const HomepageComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={3} style={{ marginTop: "5rem" }}>
            <ToDoListComponent />
          </Col>
          <Col lg={9} style={{ marginTop: "5rem" }}>
            <MainComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomepageComponent;
