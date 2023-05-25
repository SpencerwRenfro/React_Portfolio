import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import { ThemeContext } from "./contexts/ThemeContext";
import { useRef, useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";

// Routes
// import Home from "./components/Home";
import Resume from "./components/Resume";
import Works from "./components/Works";
// subRoutes
import Polytopia from "./components/Polytopia";
import ProjectTwo from "./components/ProjectTwo";
import Project3 from "./components/Project3";
// sub-sub-Routes
import ReactPreview from "./components/ReactPreview";
import CPreview from "./components/CPreview";
import JSPreview from "./components/JSPreview";
import ProjectsPage from "./components/ProjectsPage";


function App() {
  return (
    <div className="bg-base-100">
      <div>
        <div className=" flex justify-center bg-base-100 pt-0">
          <Navbar />
        </div>
      </div>
      <div className="px-4 pt-20 md:pt-32">
        {/*     <div className="container mx-auto px-4 pt-10 lg:pt-20 mt-10"> */}
          <div >
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="resume" element={<Resume />} />
              <Route path="projectsPage" element={<ProjectsPage/>} />
              <Route path="/projectsPage/polytopia" element={<Polytopia />} />
              <Route path="/projectsPage/projecttwo" element={<ProjectTwo />} />
              <Route path="/projectsPage/projectthree" element={<Project3 />} />
            </Routes>
          </div>
      </div>      
    </div>
  );
}

export default App;

