import { useEffect, useState } from 'react';
import { Pie, Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";



let spinner = `${process.env.PUBLIC_URL}/images/spinner.svg`;






export default function Resume(props) {

    const [treeHouseProfile, setTreeHouseProfile] = useState([{}]);
    const [dataLoading, setDataLoading] = useState(false);
    const [badgeData, setBadgeData] = useState([{}]);





    useEffect(() => {
        if (!treeHouseProfile?.points) {
            getProfile();
        }
    }, [])




    function getProfile() {
        setDataLoading(true)
        fetch('https://teamtreehouse.com/profiles/spencerrenfro.json')
            .then(response => response.json())
            .then((data) => {
                setTreeHouseProfile(data);
                setDataLoading(false);
                setBadgeData(data.badges);
            })



    }


    let chartSchema = {};

    if(treeHouseProfile){
        // const pointsPropertyNames = Object.keys(treeHouseProfile.points);
        // const filteredPointsPropertyNames = pointsPropertyNames.filter(key => !key.includes("total"));
        // const chartDataValues = filteredPointsPropertyNames.map((name) => treeHouseProfile.points[name]);
        // console.log(pointsPropertyNames);


        chartSchema = {
            labels:  Object.keys(treeHouseProfile?.points).filter(key => !key.includes("total")).map((key) => key),
            datasets: [{
              label: "Points",
            //   data: chartDataValues,
            data: Object.keys(treeHouseProfile?.points).filter(key => !key.includes("total")).map((key) => treeHouseProfile.points[key]),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
        ],
        };
    }




return (
    <div className="card  bg-neutral  shadow-xl ">


        <div className="main-content home flex justify-center">
            <div>
                <h1 className="normal-case text-2xl grow h-7 pb-20">Education</h1>
            </div>

        </div>
        <div className="bg-base-300 m-5 rounded-lg">
            <h1 className="normal-case text-2xl pb-20 sm:pb-20 md:pb-20 lg:pb-10 h-7 ml-5 " >TeamTreeHouse Profile Data:</h1>
            <h3 className="ml-5">Courses Plus Student</h3>
            <h3 className="ml-5">Member Since January 2, 2020</h3>
            <p className="pt-5">
                This data is taken from https://teamtreehouse.com/spencerrenfro, this is an open source API provided by teamtreehouse
            </p>

        </div>

        {
            dataLoading ?

                <div className="flex justify-center">
                    <img className="animate-spin spinner" viewBox="0 0 24 24" src={spinner} alt="" />
                </div>

                :

                <div>
                    <div className=" rounded-lg p-5 m-10">
                        <div className="mt-5 mb-10 border-bottom">
                            <h1 className="normal-case text-2xl grow h-7 ml-5 pb-20 md:mb-2" border-bottom>Total Points:{treeHouseProfile?.points?.total || 0}</h1>
                        </div>
                        <div>
                            <Pie data={chartSchema}/>
                            <Bar data={chartSchema}/>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
                            <div className="btn-primary rounded-lg p-2 max-w-full md:max-w-md lg:max-w-md"><li className="place-self-center">HTML: {treeHouseProfile?.points?.HTML || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">CSS: {treeHouseProfile?.points?.CSS || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">JavaScript: {treeHouseProfile?.points?.JavaScript || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm truncate ...">Achievements: {treeHouseProfile?.badges?.length || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">C# : {treeHouseProfile?.points?.["C#"] || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Digital Literacy: {treeHouseProfile?.points?.["Digital Literacy"] || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Computer Science: {treeHouseProfile?.points?.["Computer Science"] || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Machine Learning: {treeHouseProfile?.points?.["Machine Learning"] || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Security: {treeHouseProfile?.points?.Security || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Java: {treeHouseProfile?.points?.Java || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">Data Bases: {treeHouseProfile?.points?.Databases || 0} </li></div>
                            <div className="btn-primary rounded-lg p-2"><li className="place-self-center text-xs md:text-sm">PHP: {treeHouseProfile?.points?.PHP || 0} </li></div>
                        </ul>
                    </div>

                    <div className="bg-base-300 rounded-lg ">
                        <div className="mt-5 mb-10 border-bottom">
                            <h1 className="normal-case text-2xl grow h-7 ml-5 pb-20 md:mb-2 text-center" border-bottom>Achievements: Total {badgeData.length}</h1>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>


                            </div>



                            <div className="collapse-content">
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
                                    {badgeData.map((data) => (
                                        <li className="image-box" key={data.id}>
                                            <div className="image-title">
                                                <h1 className="text-neutral-300 ">{data.name}</h1>
                                            </div>
                                            <img className="icon-images" src={data.icon_url} alt="svg" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

        }




    </div>
);
}





//Chart data 

// treeHouseProfile.points.total 
// treeHouseProfile.points.HTML
// treeHouseProfile.points.CSS
// treeHouseProfile.points.JavaScript
// treeHouseProfile.points.["Digital Literacy"]
// treeHouseProfile.points.["Computer Science"]
// treeHouseProfile.points.["Machine Learning"]
// treeHouseProfile.points..["C#"]
// treeHouseProfile.points.Security 
// treeHouseProfile.points.Java 
// treeHouseProfile.points.Databases
// treeHouseProfile.points.PHP 

// const [userData, setUserData] = useState({
//     labels: [
//         treeHouseProfile.points.total, 
//         treeHouseProfile.points.HTML,
//         treeHouseProfile.points.CSS,
//         treeHouseProfile.points.JavaScript,
//         treeHouseProfile.points.Security, 
//         treeHouseProfile.points.Java,
//         treeHouseProfile.points.Databases,
//         treeHouseProfile.points.PHP
//     ],
//     datasets: [{
//         label: "Users Gained",
//         data:  [
//             treeHouseProfile.points.total, 
//             treeHouseProfile.points.HTML,
//             treeHouseProfile.points.CSS,
//             treeHouseProfile.points.JavaScript,
//             treeHouseProfile.points.Security, 
//             treeHouseProfile.points.Java,
//             treeHouseProfile.points.Databases,
//             treeHouseProfile.points.PHP
//         ],
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
// });
//             // treeHouseProfile.points.["Digital Literacy"],
// treeHouseProfile.points.["Computer Science"],
// treeHouseProfile.points.["Machine Learning"],
// treeHouseProfile.points."C#"],

// end---------------------------------------------
// window screen size ---------------------------------

// const [windowSize, setWindowSize] = useState([
//     window.innerWidth,
//     window.innerHeight,
// ]);
{/* <h2>Width: {windowSize[0]}</h2>

                <h2>Height: {windowSize[1]}</h2> */}

    // useEffect(() => {
    //     const handleWindowResize = () => {
    //         setWindowSize([window.innerWidth, window.innerHeight]);
    //     };

    //     window.addEventListener('resize', handleWindowResize);

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     };
    // }, []);

// end --------------------------


