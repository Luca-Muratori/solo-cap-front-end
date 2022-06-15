import { Col, Container, Row } from "react-bootstrap";
import PanoramicPhotoComponent from "../PanoramicPhoto/PanoramicPhotoComponent.jsx";
import PhotosFromUsersContainer from "../PhotosFromUsers/PhotosFromUsersContainer.jsx";
import PlaceInfoComponent from "../PlaceInfo/PlaceInfoComponent.jsx";
import PlaceToDoList from "../PlaceToDoList/PlaceToDoList.jsx";
import AddAPhotoComponent from "../UserAddAPhoto/AddAPhotoComponent.jsx";
import "./MainComponentPlaceProfile.css";

const MainComponentPlaceProfile = () => {
  return (
    <div>
      <PanoramicPhotoComponent />
      <PlaceInfoComponent />
      <Container id="placeMainComponent">
        <Row>
          <Col lg={3}>
            <PlaceToDoList />
          </Col>
          <Col lg={9}>
            <AddAPhotoComponent />
            <PhotosFromUsersContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainComponentPlaceProfile;
