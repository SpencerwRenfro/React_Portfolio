import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

export default function Routes(props) {

    const isDarkMode = useContext(ThemeContext);
    console.log(isDarkMode);
    

    return(
    <div>
        <div className="card w-100 bg-neutral text-neutral-conten mt-10">
            <div className="card-body items-center text-center flex-row">
            <input type="checkbox" className="toggle" defaultChecked={isDarkMode} onChange={ () => props.setIsDarkMode(!isDarkMode)} />
                <button className="btn btn-outline btn-secondary">Home</button>
                <button className="btn btn-outline btn-secondary">Resume</button>
                <button className="btn btn-outline btn-secondary">Works</button>
                <button className="btn btn-outline btn-secondary">Contact</button>
            </div>
        </div>
    </div>
    );
}