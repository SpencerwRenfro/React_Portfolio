import { useEffect, useState } from 'react';

let spinner = `${process.env.PUBLIC_URL}/images/spinner.svg`;




export default function Resume() {






    const [treeHouseProfile, setTreeHouseProfile] = useState({});
    const [dataLoading, setDataLoading] = useState(false);
    const [badgeData, setBadgeData] = useState([{}]);


    // for grid attempt with images 
    // const imageSource = badgeData.map((data) => (
    //     <ul className="grid grid-rows-2 grid-flow-col gap-4">
    //         <li><img src={data.icon_url} alt=""/></li>
    //     </ul>
    // ))
    
    // in return statement
    // {badgeData.map((data) =>(
    //     return <li><img src={data.icon_url} alt=""/></li>
    //    ))}



    useEffect(() => {
        if (!treeHouseProfile?.points) {
            getProfile();
        }
        console.log("useEffect")
    }, [])

    // const [userName, setUserName] = useState('');
    // const [javaScriptPoints, setJavaScriptPoints] = useState('');
    // const [points, setPoints] = useState([totalPoints,userName, javaScriptPoints]);


    // const ref = useRef(null);
    // let myList = ref.current;


    // useEffect(() => {
    //     const element = ref.current;
    //     console.log(`UseEffect here:${element}`);
    //     console.log(element.id);
    //   }, [points]);



    function getProfile() {
        setDataLoading(true)
        fetch('https://teamtreehouse.com/profiles/spencerrenfro.json')
            .then(response => response.json())

            // (const product of data.products)
            .then( (data) => {
                console.log(data.badges);
                setTreeHouseProfile(data);
                setDataLoading(false)
                setBadgeData(data.badges)
            

                // if(data.points.total){
                //     setTotalPoints(data.points.total);
                // }
                // for (var prop in data.points) {
                //     console.log(prop + ':' + data.points[prop]);
                //     // console.log(`experiment ${data.points[prop]}`)
                //     if(prop === "total"){
                //          let number = data.points[prop];
                //         setTotalPoints(number)
                //         console.log(`totalPoints useState: ${totalPoints} number:${number}`);
                //     }
                //   const listItem = document.createElement('li');
                //   listItem.appendChild(
                //     document.createElement('strong')
                //   ).textContent = prop.Name;
                //   listItem.append(
                //     ` can be found in ${
                //       prop.Location
                //     }. Cost: `
                //   );
                //   listItem.appendChild(
                //     document.createElement('strong')
                //   ).textContent = `£${prop.Price}`;                          
                // }



            })
    }





    return (
        <div className="card  bg-neutral  shadow-xl mx-16 mt-10 ">

            <div className="main-content home flex justify-center">
                <div>
                    <h1 className="normal-case text-2xl grow h-7 ml-5">Resume</h1>
                </div>
            </div>
            <div className="bg-base-300 p-5 m-10 rounded-lg">
                <h1 className="normal-case text-2xl grow h-7 ml-5 " >TeamTreeHouse Profile Data:</h1>
                <h3 className="ml-5">Courses Plus Student</h3>
                <h3 className="ml-5">Member Since January 2, 2020</h3>             
            </div>

            {
                dataLoading ? 
         
               
                <img className="animate-spin ml-96 h-5 w-5" viewBox="0 0 24 24" src={spinner} alt=""/> :

                    <div>
                        <div className=" bg-base-300 rounded-lg p-5 m-10">
                            <div className="mt-5 mb-10 border-bottom">
                                <h1 className="normal-case text-2xl grow h-7 ml-5 mb-2" border-bottom>Total Points:{treeHouseProfile?.points?.total || 0}</h1>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
                                <div className="btn-primary rounded-lg p-2 max-w-full md:max-w-md lg:max-w-md"><li className="place-self-center">HTML: {treeHouseProfile?.points?.HTML || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">CSS: {treeHouseProfile?.points?.CSS || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">JavaScript: {treeHouseProfile?.points?.JavaScript || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">Achievements: {treeHouseProfile?.badges?.length || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">C# : {treeHouseProfile?.points?.["C#"] || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">Digital Literacy: {treeHouseProfile?.points?.["Digital Literacy"] || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">Computer Science: {treeHouseProfile?.points?.["Computer Science"] || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">Machine Learning: {treeHouseProfile?.points?.["Machine Learning"] || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">Security: {treeHouseProfile?.points?.Security || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">Java: {treeHouseProfile?.points?.Java || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">Data Bases: {treeHouseProfile?.points?.Databases || 0} </li></div>
                                <div className="btn-primary rounded-lg p-2"><li className="place-self-center">PHP: {treeHouseProfile?.points?.PHP || 0} </li></div>
                            </ul>
                        </div>
              
                        <div className="bg-base-300 rounded-lg p-5 m-10">
                        <div className="mt-5 mb-10 border-bottom">
                                <h1 className="normal-case text-2xl grow h-7 ml-5 mb-2 text-center" border-bottom>Achievements</h1>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  max-h-[40rem] overflow-auto "> {/**overflow-auto  */}
                                {console.log("BadgeData",badgeData)}
                            {badgeData.map((data) => (                       
                                <li className="image-box" key={data.id}>
                                    <div className="image-title">
                                    <h1 className="text-neutral-300">{data.name}</h1>
                                    </div> 
                                    <img className="icon-images" src={data.icon_url} alt="svg"/>
                                </li>
                            ))}
                            </ul>
                        </div>

{/* 
                        <div className=" bg-base-300 rounded-lg p-5 m-10 overflow-y-scroll  max-h-[40rem]">
                            <h1 className="normal-case text-2xl grow h-7 ml-5">Achievements</h1>
                            {badgeData.map((data) => (
                                <Badges 
                                    key={data.id}
                                    title={data.name}
                                    image={data.icon_url}
                                />

                            ))}

                        </div> */}
                    </div>
                    
            }
            





        </div>
    );
}



