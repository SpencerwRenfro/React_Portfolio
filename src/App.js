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


function App() {


  // fetch request

  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file

  //   fetch("Resume.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file

  //       const fileURL = window.URL.createObjectURL(blob);

  //       // Setting various property values
  //       // let alink = document.createElement("a");


  //       let alink = React.createElement('a',null, '');
  //       alink.href = fileURL;
  //       alink.download = "Resume.pdf";
  //       alink.click();
  //     });
  //   });
  // };



  return (
    <div className="bg-base-300">
      {/* grid  md:grid-cols-1" */}
      {/* <div className=" flex justify-center md:justify-end bg-base-300"> */}
      <div>
        {/*  className="grid grid-cols-12  bluebox" */}
        <div className=" flex justify-center bg-base-300">
          {/*  className="col-span-3 md:col-span-12 md:col-end-12  redbox" */}
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20 mt-10">
        <div className="grid grid-cols-12 gap-4 bg-base-300  justify-center">        
          <div className="col-span-12 md:col-span-4">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-8">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="resume" element={<Resume />} />
              <Route path="works" element={<Works />}>
                <Route path="polytopia" element={<Polytopia />} />
                <Route path="polytopia/react-preview" element={<ReactPreview />} />
                <Route path="polytopia/c-preview" element={<CPreview />} />
                <Route path="polytopia/javascript-preview" element={<JSPreview />} />
                <Route path="projecttwo" element={<ProjectTwo />} />
                <Route path="projectthree" element={<Project3 />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;

