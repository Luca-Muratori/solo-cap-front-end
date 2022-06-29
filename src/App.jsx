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
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { useEffect, useState } from "react";

function App() {
  const [tokenInLocalStorage, setTokenInLocalStorage] = useState(null);
  const token = new URLSearchParams(window.location.search).get("accessToken");

  // console.log(token);
  // localStorage.setItem("token", token);
  useEffect(() => {
    if (token) {
      localStorage.setItem("accessToken", token);
      setTokenInLocalStorage(token);
    } else {
      setTokenInLocalStorage(null);
    }
  }, []);
  return (
    <>
      <Provider store={configureStore}>
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
      </Provider>
    </>
  );
}

export default App;
