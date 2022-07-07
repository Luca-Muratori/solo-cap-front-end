import { Form, Button } from "react-bootstrap";
import React from "react";
import "./WelcomePageComponent.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GoogleLogin from "./GoggleLogin";

const LoginComponent = () => {
  const phoneNumber = useSelector((state) => state.user.phoneNumber);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleRegister = (e) => {
  //   window.location.href = "/register";
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };
    const response = await fetch(process.env.REACT_APP_URL + "/user/login ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      const data = await response.json();
      navigate("/home");
      console.log(data);
      localStorage.setItem("token", data.accessToken);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <div id="WelcomeLogin">
        <div id="loginCredentialTitle">Insert your credentials</div>
        <div id="loginCredential">
          <Form className="d-flex flex-column " onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="insert your email"
              className="mb-3 input"
            />
            <input
              placeholder="insert your password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button id="buttonLogin" type="submit" className="mt-3">
              Log in{" "}
            </Button>
          </Form>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
