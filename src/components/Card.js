import React from 'react';
import { useState, useEffect  } from 'react';





export default function Card() {

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


    let profileImage = `${process.env.PUBLIC_URL}/images/me.png`;
  /**
     // fetch request
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("../SpencerResume.pdf").then((response) => {
          response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Spencer-Renfro-Resume.pdf";
            alink.click();
          });
        });
    }  
    */
 // end


    return (
          <div className="card bg-neutral shadow-xl xl:fixed profile-card xl:p-0" >
                <div className="card-body ">

                    <figure>
                        <img className="profile-image" src={profileImage} alt="Spencer Renfro" />
                    </figure>
                    <h2 className="card-title justify-center text-primary-content">Spencer Renfro</h2>
                    <h3 className="bg-base-300 self-center p-1.5 rounded-lg">Front End Developer</h3>

                    <div className="card-actions justify-center flex flex-col">
                        {/* TODO: make the button full width on mobile, but auto width on md devices or larger */}
                        <a className="btn btn-primary w-full " href="https://github.com/SpencerwRenfro?tab=projects" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a className="btn btn-primary w-full" href="https://www.linkedin.com/in/spencer-renfro-854b22174/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                          {/* <button onClick={onButtonClick} className="btn btn-primary flex">Download Resume</button> */}
                          <a className="btn btn-primary w-full" href="https://docs.google.com/document/d/1vepN6ogWXxj5zuMN96skXjb8uTXHfdQLol_UHH86TDU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Resume
                          </a>

                    </div>

                    <div>
                        <ul className="bg-base-300 self-center p-2 rounded-lg">
                            <li> Phone: 217-313-4416</li>
                            <li>Location: Boulder CO</li>
                            <li>Email: Developer@spencerwrenfro.com</li>
                            <li>Width: {windowSize[0]}</li>
                            <li>Height: {windowSize[1]}</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}