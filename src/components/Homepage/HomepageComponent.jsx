import React, { useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent";
import ToDoListComponent from "./ToDoLists/ToDoListComponent";
// import { getUser } from "../../redux/userSlice";
// import { connect } from "react-redux";

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getUserProp: (url) => {
//     dispatch(getUser(url));
//   },
// });

const HomepageComponent = () => {
  //   useEffect(() => {
  //     getUserProp("https://solo-capstone.herokuapp.com/user/me");
  //   }, []);

  return (
    <>
      <Container className="homepage">
        <Row>
          <Col sm={12} lg={3} style={{ marginTop: "5rem" }}>
            <ToDoListComponent />
          </Col>
          <Col sm={12} lg={9} style={{ marginTop: "4rem" }}>
            <MainComponent />
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};

export default HomepageComponent;
