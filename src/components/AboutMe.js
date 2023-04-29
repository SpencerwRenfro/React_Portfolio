import "./Badges.css";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function AboutMe() {
  let reactImage = `${process.env.PUBLIC_URL}/images/React2.png`;
  let nodeImage = `${process.env.PUBLIC_URL}/images/nodeJS.png`;
  let tailwindImage = `${process.env.PUBLIC_URL}/images/tw.png`;
  let cImage = `${process.env.PUBLIC_URL}/images/Cimg.png`;
  let newNode = `${process.env.PUBLIC_URL}/images/nodeJSg.png`;
  let newReact = `${process.env.PUBLIC_URL}/images/REACT.png`;
  let gitHub = `${process.env.PUBLIC_URL}/images/github.png`;
  let restAPI = `${process.env.PUBLIC_URL}/images/RestApi.png`;
  
  // react-new.png
  // C:\Users\Spenc\Repositories\React\Portfolio\react-portfolio\public\images\node-svg.jpg
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="container mx-auto px-4  mt-10">

    
    <div className="grid grid-cols-12 gap-4 xl:gap-40 bg-base-300  justify-center">
      <div className="col-span-12 xl:col-span-4">
        <Card />
      </div>

      <div className="col-span-12 xl:col-span-6 bg-neutral card shadow-xl">
        <div className="card-body">
          {/* <div>
            <h2>Width: {windowSize[0]}</h2>

            <h2>Height: {windowSize[1]}</h2>
          </div> */}
          {/* overflow-auto  max-h-[50rem] this is for scroll bar */}
          <div className="pb-5">
            <h1 className="text-primary-content text-3xl font-bold">
              About Me
            </h1>
            <p className="text-xl">
              I am a former U.S. Air Force aerospace ground equipment mechanic,
              and currently a junior front-end developer. I am from Boulder,
              Colorado. I enjoy crafting awesome websites and web apps with
              JavaScript and front-end frameworks. I’m currently looking for
              entry-level employment to start my career and find senior team
              mentorship.
            </p>
          </div>
          <div className="pb-5">
            <h2 className="text-primary-content text-3xl font-bold">
              What I Do
            </h2>
            <p className="text-xl">
              I specialize in Single Page Applications in React creating
              websites that do not have to send multiple server requests to
              load.{" "}
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 pb-5">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-primary-content text-xl">
                Application Development
              </h2>
              <p className="text-xl">
                Developing applications using a top-down methodology approach,
                handling events and driving user interfaces with a data-first
                approach.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-primary-content text-xl">Front-End Design</h2>
              <p className="text-xl">
                Leveraging front-end frameworks that implement mobile first
                design to create a beautiful UI/UX on the web.{" "}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-primary-content text-xl">
                API Creation & Consumption
              </h2>
              <p className="mt-2 text-xl">
                Managing application state with NodeJS and producing adaptable
                REST APIs.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-primary-content text-xl">DOM Manipulation</h2>
              <p className="text-xl">
                Working with front-end interfaces Document Object Models are
                essential for user friendly experiences.
              </p>
            </div>
          </div>
        
          <h2 className="text-primary-content text-xl text-center pb-3">
            Favorite Technologies
          </h2>
        
          <div className="grid grid-cols-12 justify-items-center gap-4 flex-wrap">
            <div className="col-span-6 md:col-span-3 pb-5">
              <img
                className="w-4/6 md:w-1/2 mx-auto pb-3"
                src={cImage}
                alt="react img"
              />
              <p className="text-center">C</p>
            </div>
            <div className="col-span-6 md:col-span-3 pb-5">
              <img
                className="w-4/6 md:w-1/2 mx-auto pb-3"
                src={nodeImage}
                alt="react img"
              />
              <p className="text-center">Node.js</p>
            </div>
            <div className="col-span-6 md:col-span-3 pb-5">
              <img
                className="w-4/6 md:w-1/2 mx-auto pb-3"
                src={restAPI}
                alt="react img"
              />
              <p className="text-center">Rest APIs</p>
            </div>
            <div className="col-span-6 md:col-span-3 pb-5">
              <img
                className="w-4/6 md:w-1/2 mx-auto pb-3"
                src={gitHub}
                alt="react img"
              />
              <p className="text-center">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
