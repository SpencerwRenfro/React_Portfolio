import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
export default function Menu() {
    
    return(
        <div>
            <nav>
        <NavLink className="btn btn-primary lg:m-3 " activestyle={"primary-focus"} to="polytopia">Polytopia</NavLink>
        <NavLink className="btn btn-primary lg:m-3" activestyle={"primary-focus"} to="projecttwo">Facebook Reactions</NavLink>
        <NavLink className="btn btn-primary lg:-3" activeStyle={"primary-focus"} to="projectthree">Log in Form</NavLink>

    </nav>
        </div>
    );
}