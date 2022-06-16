import React from "react";
import SinglePhotoComponent from "./SinglePhotoComponent";
import { Container, Row, Col } from "react-bootstrap";

const PhotosComponent = () => {
  return (
    <Container className="mt-1">
      <Row>
        <Col className="p-0 pr-2 " lg={4}>
          <SinglePhotoComponent />
        </Col>
        <Col className="p-0 pr-2" lg={4}>
          <SinglePhotoComponent />
        </Col>
        <Col className="p-0 pr-2" lg={4}>
          <SinglePhotoComponent />
        </Col>
        <Col className="p-0 pr-2" lg={4}>
          <SinglePhotoComponent />
        </Col>
        <Col className="p-0 pr-2" lg={4}>
          <SinglePhotoComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default PhotosComponent;
