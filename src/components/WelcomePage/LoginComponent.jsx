import { Form } from "react-bootstrap";
import React from "react";
import "./WelcomePageComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GoogleLogin from "./GoggleLogin";

const LoginComponent = () => {
  const phoneNumber = useSelector((state) => state.user.phoneNumber);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    window.location.href = "/register";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_URL);

    let body = {
      email: email,
      password: password,
    };
    console.log(body);
    const response = await fetch(process.env.REACT_APP_URL + "/user/login ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      window.location.href = "/home";
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
          <Form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="insert your email"
              className="mb-3 input"
            />
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="mt-1">
              Log in{" "}
            </button>
          </Form>
        </div>
      </div>
      <GoogleLogin />
    </div>
  );
};

export default LoginComponent;
