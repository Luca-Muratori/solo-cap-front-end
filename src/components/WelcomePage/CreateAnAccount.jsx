import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateAnAccount = () => {
  return (
    <div style={{ color: "black" }}>
      Not registered?
      <Link id="CreateAccountBtn" to="/registration">
        {"  "} Sign up
      </Link>
    </div>
  );
};

export default CreateAnAccount;
