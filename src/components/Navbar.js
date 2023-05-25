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
    <div className="navbar main-navbar bg-base-300">
      <div className={`${windowSize[0] <= 780 ? 'display-none' : 'md:navbar-start pl-10'}`}>
        <a href="." className="normal-case text-xl">
          <div className="flex flex-col">
            <p>Spencer Renfro</p>
            <small>Front-End Developer</small>
          </div>
        </a>
      </div>

      <div className="xl:navbar-end">
        <ul className=" grid grid-cols-12 menu menu-horizontal">
          <li className="col-span-4"><NavLink className="btn-ghost" to="/">About</NavLink></li>
          <li className="col-span-4"><NavLink className="btn-ghost" to="resume">Education</NavLink></li>
          <li className="col-span-4"><NavLink className="btn-ghost" to="projectsPage">Projects Page</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

    /* background-color: hsl(var(--p) / var(--tw-bg-opacity)); 


{/* <div className="dropdown dropdown-end">
<label tabIndex={0} className="btn btn-ghost rounded-btn capitalize text-base white">Projects</label>
<ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
  <li><li><NavLink className=" lg:text-base" activestyle="" to="works/polytopia">Polytopia</NavLink></li></li>
  <li><li><NavLink className="text-xs lg:text-base" activetyle="" to="works/projecttwo">Facebook Reactions</NavLink></li></li>
  <li><li><NavLink className="text-xs lg:text-base" activestyle="" to="works/projectthree">Log in Form</NavLink></li></li>
</ul>
</div>  */