export default function Resume(){

    // const https = require("https");

    // function getProfile(){
    //     const request = https.get(
    //         "https://teamtreehouse.com/profiles/spencerrenfro.json",
    //         (response) => {
    //             console.dir(response);
    //         }
    //     )
    // }



    function getProfile(){
        let body = "";
        fetch('https://teamtreehouse.com/profiles/spencerrenfro.json')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then(response => response.json())
   .then(data => console.log(data));
    


    return(
        <div className="card  bg-neutral  shadow-xl mx-16 mt-10 ">

                <div className="main-content home flex justify-center">
                    <div>
                        <h1>Resume</h1>
                        <button onClick={getProfile}>Get TeamTreeHouse Points</button>
                    </div>
                </div>

         </div>
    );
}