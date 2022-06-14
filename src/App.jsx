import "./App.css";
import NavbarComponent from "./components/NavBar/NavbarComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageComponent from "./components/Homepage/HomepageComponent.jsx";

function App() {
  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomepageComponent />}></Route>
          <Route path="userProfile"></Route>
          <Route path="placeProfile"></Route>
          <Route path="eventProfile"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
