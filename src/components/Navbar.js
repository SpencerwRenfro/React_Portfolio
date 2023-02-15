import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import "../index.css"
import React from 'react';
import { Link, NavLink } from 'react-router-dom';




export default function Navbar(props) {

    const isDarkMode = useContext(ThemeContext);
    console.log(isDarkMode);


    return (

        <div>

            {/* 
            Before active style
            
            <ul className=" container mx-auto mt-10  w-1/4 p-3 shadow-xl bg-neutral card gap-4 flex-row justify-space-between ">
                <li><input type="checkbox" className="toggle" defaultChecked={isDarkMode} onChange={() => props.setIsDarkMode(!isDarkMode)} /></li>
                <button>
                    <Link className="text-primary" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </Link>
                </button>
                <li><NavLink className="btn btn-primary" to="/resume" activeStyle={"primary-focus"}>Resume</NavLink></li>
                <li><Link className="btn btn-primary" to="/works" activeStyle={"primary-focus"}>Works</Link></li>
            </ul>
             */}

            <nav className=" container mx-auto mt-10  w-1/4 p-3 shadow-xl bg-neutral card gap-4 flex-row justify-space-between ">
                <input type="checkbox" className="toggle" defaultChecked={isDarkMode} onChange={() => props.setIsDarkMode(!isDarkMode)} />
                <button>
                    <Link className="text-primary" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </Link>
                </button>
                <NavLink className="btn btn-primary" to="resume" activeStyle={"primary-focus"}>Resume</NavLink>
            <NavLink className="btn btn-primary" to="works/polytopia" activeStyle={"primary-focus"}>Works</NavLink>
            </nav>




            {/* <li> className="btn btn-outli>ne btn-secondary">Resume</li>>
                <li> className="btn btn-outli>ne btn-secondary">Works</li>>
                <li> className="btn btn-outli>ne btn-secondary">Contact</li>> */}
        </div>

    );
}

// TreeHouse COde

// <header>
// <span className="icn-logo"><i className="material-icons">code</i></span>
// <ul className="main-nav">
//   <li>><a href="#">Home</a></li>>
//   <li>><a href="#">About</a></li>>
//   <li>><a href="#">Teachers</a></li>>
//   <li>><a href="#">Courses</a></li>>
// </ul>
// </header>