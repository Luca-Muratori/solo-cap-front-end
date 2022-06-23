import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const RegisterComponent = () => {
  return (
    <div
      id="registerComponent"
      style={{ backgroundColor: "blue" }}
      className="d-flex flex-column   "
    >
      <h1 className="m-auto "> Write your info</h1>
      <input className="mt-1 mx-5" type="text" placeholder="insert your name" />
      <input
        className="mt-4 mx-5"
        type="text"
        placeholder="insert your surname"
      />
      <input
        className="mt-4 mx-5"
        type="text"
        placeholder="insert your email"
      />
      <div className="d-flex flex-column">
        <span className="ml-5 mt-4">choose an avatar</span>
        <input
          className="mt-2 mx-5"
          type="file"
          placeholder="choose an image"
        />
      </div>
      <input
        className="mt-4 mb-5 mx-5"
        type="password"
        placeholder="insert your password"
      />
      <Link style={{ textAlign: "center" }} to="/home">
        <input id="registerButton" type="submit" placeholder="submit" />
      </Link>
    </div>
  );
};
export default RegisterComponent;
