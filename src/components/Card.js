import React from 'react';





export default function Card() {


    let profileImage = `${process.env.PUBLIC_URL}/images/me.png`;
  
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
 // end

    return (
        <div className="m-0 p-0 w-3/5">

            <div className="card bg-neutral  shadow-xl mx-16 mt-10 p-0">
            {/* <div className="card bg-neutral  shadow-xl mx-16 mt-10 p-0 dark:bg-black dark:text-white dark:bg-none">
                for edditing theme
            */}
                <div className="card-body ">

                    <figure><img src={profileImage} alt="Spencer Renfro" /></figure>
                    <h2 className="card-title justify-center text-primary-content">Spencer Renfro</h2>
                    <h3 className="bg-base-300 self-center p-1.5 rounded-lg">Front End Developer</h3>

                    <div className="card-actions justify-center ">
                        <a className="btn btn-primary" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a className="btn btn-primary" href="https://github.com/SpencerwRenfro?tab=projects" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a className="btn btn-primary" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>

                    </div>

                    <div>
                        <ul className="bg-base-300 self-center p-1.5 rounded-lg">
                            <li> Phone: 217-313-4416</li>
                            <li>Location: Boulder CO</li>
                            <li>Email: Developer@spencerwrenfro.com</li>
                            <li>Birthday: October 15 1994</li>
                        </ul>
                    </div>

                    <div className="self-center mt-4">
                        <button onClick={onButtonClick} className="btn btn-primary flex">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
}