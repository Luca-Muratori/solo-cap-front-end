import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateAnAccount = () => {
  return (
    <Link to="/register">
      <div id="CreateAccountBtn">
        <Button className="w-100" variant="success">
          Create an account
        </Button>
      </div>
    </Link>
  );
};

export default CreateAnAccount;
