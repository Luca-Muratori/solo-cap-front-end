import "./App.css";
import React from "react";
import NavbarComponent from "./components/NavBar/NavbarComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageComponent from "./components/Homepage/HomepageComponent.jsx";
import MainComponentPlaceProfile from "./components/PlaceProfile/MainComponent/MainComponentPlaceProfile";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import WelcomePageComponent from "./components/WelcomePage/WelcomePageComponent";
import RegisterComponent from "./components/Register/RegisterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePageComponent />}></Route>
          <Route path="/register" element={<RegisterComponent />}></Route>
          <Route element={<NavbarComponent />}>
            <Route path="/home" element={<HomepageComponent />}></Route>
            <Route path="/myProfile" element={<UserProfile />}></Route>
            <Route
              path="/placeProfile"
              element={<MainComponentPlaceProfile />}
            ></Route>
          </Route>
          {/* <Route path="eventProfile"></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
