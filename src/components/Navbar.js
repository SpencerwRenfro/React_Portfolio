import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import "../index.css"
import React from 'react';
import { Link, NavLink } from 'react-router-dom';




export default function Navbar(props) {




    return (
            <nav  className=" container mx-auto mt-10  w-80 p-3 shadow-xl bg-neutral card gap-4 flex-row justify-space-between  " >
                {/*  className="redbox col-span-12 md:col-span-2 md:col-end-12  shadow-xl bg-neutral card flex-row space-x-4 justify-center" */}

                <button>
                    <Link className="text-primary" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 
                        011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Link>
                </button>
                <NavLink className="btn btn-primary" to="resume" activestyle={"primary-focus"}>Education</NavLink>
            <NavLink className="btn btn-primary" to="works/polytopia" activestyle={"primary-focus"}>Works</NavLink>
            </nav>



   

    );
}