import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
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
    <div
      id="registerComponent"
      style={{ backgroundColor: "blue" }}
      className="d-flex flex-column   "
    >
      <h1 className="m-auto "> Write your info</h1>
      <Form onSubmit={handleRegistration}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 mx-5"
          type="text"
          placeholder="insert your name"
        />
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="mt-4 mx-5"
          type="text"
          placeholder="insert your surname"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 mx-5"
          type="text"
          placeholder="insert your email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 mb-5 mx-5"
          type="password"
          placeholder="insert your password"
        />
        <input id="registerButton" type="submit" placeholder="submit" />
      </Form>
    </div>
  );
};
export default RegisterComponent;
