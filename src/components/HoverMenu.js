import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

export default function HoverMenu() {
    
    return(
        <div>
        <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">Projects</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink className="btn btn-primary mb-3 " activestyle={"primary-focus"} to="polytopia">Polytopia</NavLink>
            <NavLink className="btn btn-primary mb-3  " activestyle={"primary-focus"} to="projecttwo">Facebook Reactions</NavLink>
            <NavLink className="btn btn-primary mb-3 " activeStyle={"primary-focus"} to="projectthree">Log in Form</NavLink>
        </ul>
    </div>
        </div>
    );
}