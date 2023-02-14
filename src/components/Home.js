import Card from "./Card"
import AboutMe from "./AboutMe"

function Home() {

    return (
        // <div className="main-content home">
        //     <div className="flex gap-56">
        //         <Card />
        //     </div >
        //     <div>
        //         <AboutMe />
        //     </div>
        // </div >
        <div className="flex justify-end">
            <AboutMe />
        </div>
    );
};

export default Home;


// <div className="flex">
// <div className="main-content home">
//     <Card />
// </div>
// <div>
//     <AboutMe />
// </div>
// </div>