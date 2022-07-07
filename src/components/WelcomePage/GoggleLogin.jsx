import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const GoggleLogin = () => {
  const navigate = useNavigate();
  const params = useParams();

  const handleGoogleFailure = (response) => {
    alert(response);
  };
  const handleGoogleLogin = async () => {
    console.log("params", params);
    // const response = await fetch(
    //   "https://solo-capstone.herokuapp.com/user/googleLogin ",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // console.log(response);
    // if (response.status === 200) {
    //   const data = await response.json();
    //   navigate("/home");
    //   console.log(data);
    //   localStorage.setItem("token", data.accessToken);
    // } else {
    //   alert("Invalid credentials");
    // }
  };
  return (
    <div id="googleLogin">
      <a
        id="googleRedirect"
        onClick={handleGoogleLogin}
        href={`${process.env.REACT_APP_URL}/user/googleLogin`}
      >
        <FcGoogle id="goggleIcon" />
        Continue with google
      </a>
    </div>
  );
};

export default GoggleLogin;
