import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SideBar from "./Components/SiderBar";
import Experiments from "./Pages/Experiments";
import Programming from "./Pages/Programming";
import Schools from "./Pages/Schools";
import Trainings from "./Pages/Trainings";
import Hobby from "./Pages/Hobby";
import Home from "./Pages/Home"
import Slider from "./Components/Slider"


function App() {
  return (
      <>
      <BrowserRouter>
          <SideBar/>
          <Slider/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/experiments" element={<Experiments/>}/>
              <Route path="/programming-skills" element={<Programming/>}/>
              <Route path="/schools" element={<Schools/>}/>
              <Route path="/trainings" element={<Trainings/>}/>
              <Route path="/hobby" element={<Hobby/>}/>
          </Routes>
      </BrowserRouter>
      </>


  );
}

export default App;
