import React, { useEffect, useState } from "react";
import SinglePhotoComponent from "./SinglePhotoComponent";
import { Container, Row, Col } from "react-bootstrap";

const PhotosComponent = ({ user }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(user);
    console.log(user);
  }, [user]);

  const getPhotos = async (user) => {
    try {
      console.log("user", user);
      if (user) {
        let response = await fetch(
          process.env.REACT_APP_URL + "/user/" + user._id + "/photos",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          setPhotos(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-1">
      <Row>
        {photos &&
          photos.map((photo) => {
            return (
              <Col className="p-0 pr-2 " lg={4}>
                <SinglePhotoComponent
                  key={photo._id}
                  cloudinaryLink={photo.cloudinaryLink}
                  photo={photo}
                  user={user}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default PhotosComponent;
