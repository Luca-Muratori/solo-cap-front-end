import { Button } from "react-bootstrap";
import React from "react";
import "./WelcomePageComponent.css";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  return (
    <div id="WelcomeLogin">
      <div id="loginCredentialTitle">Insert your credentials</div>
      <div id="loginCredential">
        <input
          type="email"
          placeholder="insert your email"
          className="mb-3 input"
        />
        <input
          className="input"
          type="password"
          placeholder="insert your password"
        />
        <Link to="/home">
          <Button className="mt-1">Log in </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;
