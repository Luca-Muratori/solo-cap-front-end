import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    let body = {
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    const response = await fetch("https://solo-capstone.herokuapp.com/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 201) {
      const data = await response.json();
      console.log(data);
      navigate("/");
    }
  };

  return (
    <div id="registrationBg">
      <div id="registerComponent" className="d-flex flex-column   ">
        <h1
          className="mb-4 mt-3 mx-auto "
          style={{
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Sign up with your email
        </h1>
        <Form style={{ textAlign: "center" }} onSubmit={handleRegistration}>
          <div
            style={{ width: "73%", margin: " auto" }}
            className="d-flex flex-column align-items-start"
          >
            {" "}
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Name</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input mt-1 "
              type="text"
              placeholder="insert your name"
            />
          </div>

          <div
            style={{ width: "73%", margin: " auto" }}
            className="d-flex flex-column align-items-start mt-3"
          >
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              Last Name
            </div>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="input mt-1"
              type="text"
              placeholder="insert your surname"
            />
          </div>

          <div
            style={{ width: "73%", margin: " auto" }}
            className="d-flex flex-column align-items-start mt-3"
          >
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Email</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input mt-1"
              type="text"
              placeholder="example@mail.com"
            />
          </div>

          <div
            style={{ width: "73%", margin: " auto" }}
            className="d-flex flex-column align-items-start mt-3"
          >
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Password</div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input mt-1"
              type="password"
              placeholder="insert your password"
            />
          </div>

          <Button
            id="registerButton"
            className="my-3"
            type="submit"
            placeholder="submit"
          >
            Create an account
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default RegisterComponent;
