import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";

function ProjectsPage() {
    return (
        <div>

            <div>
                <h1 className="text-center text-xl "> ProjectsPage</h1>
            </div>
            <div>
                <li><NavLink className=" lg:text-base" to="/projectsPage/polytopia">Polytopia</NavLink></li>
                <li><NavLink className="text-xs lg:text-base" to="/projectsPage/projecttwo">Facebook Reactions</NavLink></li>
                <li><NavLink className="text-xs lg:text-base" to="/projectsPage/projectthree">Log in Form</NavLink></li>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-4">
                    <NavLink to="/projectsPage/polytopia">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Polytopia</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Facebook Reactions</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Login Form</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </div>

 

        </div>
    )
}

export default ProjectsPage