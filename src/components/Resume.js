import { useEffect, useState } from 'react';

let spinner = `${process.env.PUBLIC_URL}/images/spinner.svg`;




export default function Resume() {

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






    const [treeHouseProfile, setTreeHouseProfile] = useState({});
    const [dataLoading, setDataLoading] = useState(false);
    const [badgeData, setBadgeData] = useState([{}]);




    useEffect(() => {
        if (!treeHouseProfile?.points) {
            getProfile();
        }
        console.log("useEffect")
    }, [])




    function getProfile() {
        setDataLoading(true)
        fetch('https://teamtreehouse.com/profiles/spencerrenfro.json')
            .then(response => response.json())

            // (const product of data.products)
            .then((data) => {
                console.log(data.badges);
                setTreeHouseProfile(data);
                setDataLoading(false)
                setBadgeData(data.badges)





            })
    }





    return (
        <div className="card  bg-neutral  shadow-xl  mt-10 ">

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
                <h2>Width: {windowSize[0]}</h2>

                <h2>Height: {windowSize[1]}</h2>
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
                                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  "> {/**for scroll bar max-h-[40rem] overflow-auto  */}
                                        {console.log("BadgeData", badgeData)}
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



