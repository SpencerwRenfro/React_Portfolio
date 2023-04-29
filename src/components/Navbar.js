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
    <div className="  main-navbar bg-base-100 lg:pr-20">
      <div className="lg:flex-1 ">
        <a href="." className="normal-case text-xl">
          <div className="flex flex-col">
            <p className={`${windowSize[0] <= 560 ? 'display-none' : ''}`}>Spencer Renfro</p>
            <small className={`${windowSize[0] <= 560 ? 'display-none' : ''}`}>Front-End Developer</small>
          </div>
        </a>
      </div>

      <div className="menu justify-center menu-horizontal">
        <ul className="menu menu-horizontal   px-1">
          <li>
            <NavLink to="/" activestyle="primary-focus">About</NavLink>
          </li>
          <li>
            <NavLink to="resume" activestyle="primary-focus">Education</NavLink>
          </li>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn capitalize text-base white">Projects</label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><NavLink className=" lg:text-base" activestyle="primary-focus" to="works/polytopia">Polytopia</NavLink></li>
              <li><NavLink className="text-xs lg:text-base" activetyle="primary-focus" to="works/projecttwo">Facebook Reactions</NavLink></li>
              <li><NavLink className="text-xs lg:text-base" activestyle="primary-focus" to="works/projectthree">Log in Form</NavLink></li>
            </ul>
          </div> 
        </ul>
      </div>

      
    </div>
  );
}
