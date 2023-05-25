import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";

function ProjectsPage() {
    return (
        <div>

            <div>
                <h1 className="text-center text-7xl p-10 "> Projects Page</h1>
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
                    <NavLink to="/projectsPage/projecttwo">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Facebook Reactions</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <NavLink to="/projectsPage/projectthree">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Login Form</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    </NavLink>
                </div>
            </div>

 

        </div>
    )
}

export default ProjectsPage