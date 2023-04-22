import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import "../index.css";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';


export default function Navbar(props) {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
]);

useEffect(() => {
    const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    };
}, []);


  return (
    // <nav  className=" container mx-auto   p-3 shadow-xl bg-neutral card gap-4 flex-row justify-space-between  " >
    //     {/*  className="redbox col-span-12 md:col-span-2 md:col-end-12  shadow-xl bg-neutral card flex-row space-x-4 justify-center" */}
    // <NavLink className="btn btn-primary" to="/" activestyle={"primary-focus"}>About</NavLink>
    // <NavLink className="btn btn-primary" to="resume" activestyle={"primary-focus"}>Education</NavLink>
    // <NavLink className="btn btn-primary" to="works/polytopia" activestyle={"primary-focus"}>Works</NavLink>
    // </nav>

    // TODO:



//  <div>
//   {windowSize[0] <= 1260 ? <HoverMenu /> : <Menu />}
//   </div>


    <div className="fixed main-navbar  navbar bg-base-100 lg:pr-20 ">
      <div className="flex-1">
        <a className="normal-case text-xl">
            <div className="flex flex-col">
                <p className={`${windowSize[0] <= 560 ? 'display-none' : ''}`}>Spencer Renfro</p>
                <small className={`${windowSize[0] <= 560 ? 'display-none' : ''}`}>Front-End Developer</small>
            </div>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" activestyle={"primary-focus"}>About</NavLink>
          </li>
          <li>
           <NavLink to="resume" activestyle={"primary-focus"}>Education</NavLink>
          </li>
          <li tabIndex={0}>
            <a>
              Projects
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
              {/* <NavLink to="works/polytopia" activestyle={"primary-focus"}>Works</NavLink> */}
              <NavLink activestyle={"primary-focus"} to="works/polytopia">Polytopia</NavLink>
              </li>
              <li>
              <NavLink activestyle={"primary-focus"} to="works/projecttwo">Facebook Reactions</NavLink>
              </li>
              <li>
              <NavLink activeStyle={"primary-focus"} to="works/projectthree">Log in Form</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
