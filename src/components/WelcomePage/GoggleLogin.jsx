import React from "react";

const GoggleLogin = () => {
  const handleGoogleFailure = (response) => {
    alert(response);
  };
  const handleGoogleLogin = async () => {
    const response = await fetch(
      "https://solo-capstone.herokuapp.com/user/googleLogin ",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
    <button
      buttonText="login with google"
      clientId={process.env.GOOGLE_ID}
      onClick={handleGoogleLogin}
      onFailure={handleGoogleFailure}
    >
      Google
    </button>
  );
};

export default GoggleLogin;
