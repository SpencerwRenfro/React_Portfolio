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
            <Outlet />
        </div>
    );
}