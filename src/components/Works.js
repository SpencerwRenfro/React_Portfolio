import React from 'react';
import { Outlet, NavLink } from "react-router-dom";



export default function Works() {
    return (
        <div className="card  bg-neutral  shadow-xl mt-10 ">

            {/* bg-primary */}

            <div className="navbar  text-primary-content flex rounded-t border-bottom">
                <h1 className="normal-case text-2xl lg:grow sm:mr-20 h-7 ml-5">Portfolio</h1>
                <nav>
                    <NavLink className="btn btn-primary m-3 " activeStyle={"primary-focus"} to="polytopia">Polytopia</NavLink>
                    <NavLink className="btn btn-primary m-3" activeStyle={"primary-focus"} to="projecttwo">Facebook Reactions</NavLink> 
                    {/* <NavLink className="btn btn-primary m-3" activeStyle={"primary-focus"} to="projectthree">Project Three</NavLink>  */}
    
                </nav>

            </div>



 
            <Outlet />



        </div>
    );
}