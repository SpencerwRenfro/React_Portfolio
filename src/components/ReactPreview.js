import { Link, NavLink, Outlet } from "react-router-dom";

export default function ReactPreview() {
    const gif = `${process.env.PUBLIC_URL}/Gifs/Polytopia-React-recording2.gif`;
    return(
        
        <div>
       
            <img src={gif} alt="preview of code" />
            <h1>React preview</h1>
        </div>
    );
}