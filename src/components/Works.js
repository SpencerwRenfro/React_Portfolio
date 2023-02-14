import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import Polytopia from './Polytopia';


export default function Works() {
    return (
        <div className="card  bg-neutral  shadow-xl mx-16 mt-10 ">

            {/* bg-primary */}

            <div className="navbar  text-primary-content flex rounded-t flex border-bottom">
                <h1 className="normal-case text-2xl grow h-7 ml-5">Portfolio</h1>
                <nav>
                    <NavLink className="btn btn-primary m-3" activeStyle={"primary-focus"} to="polytopia">Polytopia</NavLink>
                    <NavLink className="btn btn-primary m-3" to="polytopia">Project 2</NavLink>
                    <NavLink className="btn btn-primary  m-3" to="project3">Project 3</NavLink>
                </nav>

            </div>



 
            <Outlet />



        </div>
    );
}