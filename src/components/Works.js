import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import HoverMenu from './HoverMenu';
import Menu from './Menu';
import { useState, useEffect } from 'react';



export default function Works() {

    /**Window screen size */
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
        <div className="card  bg-neutral   ">
{/* 
            <div className="navbar  text-primary-content flex justify-between rounded-t border-bottom">
                <div>
                    <h1 className="normal-case text-2xl lg:grow ">Portfolio</h1>
                </div>

                <div>
                    {windowSize[0] <= 1260 ? <HoverMenu /> : <Menu />}
                </div>
            </div>

            <div>
                <h2>Width: {windowSize[0]}</h2>

                <h2>Height: {windowSize[1]}</h2>
            </div> */}


            <Outlet />



        </div>
    );
}