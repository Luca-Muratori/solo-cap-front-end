import { Col, Container, Row } from "react-bootstrap";
import PanoramicPhotoComponent from "../PanoramicPhoto/PanoramicPhotoComponent.jsx";
import PlaceInfoComponent from "../PlaceInfo/PlaceInfoComponent.jsx";
import PlaceToDoList from "../PlaceToDoList/PlaceToDoList.jsx";
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
        </Row>
      </Container>
    </div>
  );
};

export default MainComponentPlaceProfile;
