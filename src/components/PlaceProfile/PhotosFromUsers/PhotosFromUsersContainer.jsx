import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SinglePhotoComponent from "./SinglePhotoComponent.jsx";
import "./PlacePhoto.css";

const PhotosFromUsersContainer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <SinglePhotoComponent />
          </Col>
          <Col lg={4}>
            <SinglePhotoComponent />
          </Col>
          <Col lg={4}>
            <SinglePhotoComponent />
          </Col>
          <Col lg={4}>
            <SinglePhotoComponent />
          </Col>
          <Col lg={4}>
            <SinglePhotoComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhotosFromUsersContainer;
