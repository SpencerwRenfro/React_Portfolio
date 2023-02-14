export default function AboutMe() {

    let reactImage = `${process.env.PUBLIC_URL}/images/React2.png`;
    let nodeImage = `${process.env.PUBLIC_URL}/images/nodeJS.png`;
    let tailwindImage = `${process.env.PUBLIC_URL}/images/tailwind2.png`;
    let cImage = `${process.env.PUBLIC_URL}/images/C.png`;

    return (
        <div className="bg-neutral card shadow-xl mx-16 mt-10 overflow-auto  max-h-[40rem]">
            <div className="mt-2 pl-10">
                <h2 className="mt-10 text-primary-content text-xl">About Me</h2>
                <p className="mt-2 text-xl">
                    I am a former U.S. Air Force aerospace ground equipment mechanic, and currently a junior front-end developer.
                    I am from Boulder, Colorado. I enjoy crafting awesome websites and web apps with JavaScript and front-end frameworks.
                    I’m currently looking for entry-level employment to start my career and find senior team mentorship.
                </p>
            </div>
            <div className="pl-10">
                <h2 className="mt-10 text-primary-content text-xl">What I Do</h2>
                <p className="mt-2 text-xl">I specialize in Single Page Applications in React creating websites that do not have to send multiple server requests to load. </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10 pl-10">
                <div>
                    <h2 className="text-primary-content text-xl">Application Development</h2>
                    <p className="mt-2 text-xl">Developing applications using a top-down methodology approach, handling events and driving user interfaces with a data-first approach.</p>
                </div>
                <div>
                    <h2 className="text-primary-content text-xl">Front-End Design</h2>
                    <p className="mt-2 text-xl">Leveraging front-end frameworks that implement mobile first design to create a beautiful UI/UX on the web. </p>
                </div>
                <div>
                    <h2 className="text-primary-content text-xl">API Creation & Consumption</h2>
                    <p className="mt-2 text-xl">Managing application state with NodeJS and producing adaptable REST APIs.</p>
                </div>
                <div>
                    <h2 className="text-primary-content text-xl">DOM Manipulation</h2>
                    <p className="mt-2 text-xl">Working with front-end interfaces Document Object Models are essential for user friendly experiences.</p>
                </div>
            </div>

            <h2 className="mt-10 pl-10 text-primary-content text-xl">Favorite Technologies</h2>
            <div className="flex gap-40 mt-2 pl-10">
                <div><img className="icon-images" src={reactImage} alt="react img" />React</div>
                <div><img className="icon-images" src={nodeImage} alt="react img" />Node.js</div>
                <div><img className="icon-images" src={cImage} alt="react img" />C</div>
                <div><img className="icon-images" src={tailwindImage} alt="react img" />Tailwind</div>
            </div>

        </div>
    );
}

{/* <div className="card w-6/12 bg-neutral  shadow-xl mt-40 ml-96">
<div className="card-body">
    <h1 className="text-4xl">About Me</h1>
</div>
</div> */}



