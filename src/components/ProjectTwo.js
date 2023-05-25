import FaceBookBrain from "./FacebookReactions/FaceBookBrain";
import { useState, useEffect } from 'react';

export default function ProjectTwo() {
    const fbGif2 = `${process.env.PUBLIC_URL}/Gifs/facebook-reactions-recording2.gif`;

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
        <div>
            <div className="pt-5 pb-5">

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-8">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        
                        <h1 className="text-primary-content text-6xl justify-center">Facebook</h1>
                        <h2 className="text-primary-content text-6xl justify-center">Reactions</h2>
                        <p className="text-xl pt-10">
                            This is a project from Teamtreehouse that I added React to. This was
                            originally a vanilla HTML and CSS pproject that involves a button group
                            to appear on a hover state. I thought this was a great project to add JavaScript to,
                            so with using React UseState hook I was able to get the emojis to render on click.
                        </p>

                    </div>

                </div>
                {/* <div className="flex justify-center border-bottom border-bottom">
                    <h1 className="mt-10 text-primary-content text-3xl justify-center font-bold ">Facebook Reactions</h1>
                </div> */}

                <div className=" mt-10">

                    <div className=" grid grid-cols-8 content-center">
                        
                        <div className={`${windowSize[0] <= 780 ? 'display-none' : ' '} facebook-card col-span-4 col-start-3 lg:col-start-6 lg:col-span-2`}>
                            {/*  <div className={`${windowSize[0] <= 780 ? 'display-none' : ' '} facebook-card col-span-4 col-start-3 lg:col-start-4 lg:col-span-2`}> */}
                            <FaceBookBrain />
                        </div>
                    </div>


                </div>


            </div>
            <div className={`${windowSize[0] >= 780 ? 'display-none' : 'flex justify-center'}`} >
                <img src={fbGif2} alt="" />
            </div>
        </div>
    );
}

// className="justify-start"
// className={`${windowSize[0] <= 780 ? 'display-none' : 'md:navbar-start pl-10'}`