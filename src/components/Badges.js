import "./Badges.css"
import { useState } from "react";
import React from 'react';
import ReactDom from 'react-dom';

export default function Badges(props) {

    const [images, setImages] = useState([props.image]);
    const [badgeData, setBadgeData] = useState({});



    // function createList(item) {


    // for(let i = 0; i < item.length; i++) {
    //     console.log(item);
    //     const title = React.createElement(
    //         'li',
    //         {},
    //         `<img src={${item[i]}}/>`
    //     );

    // }
    // }



    // new fetch request here
    const loadData = async () => {
        await fetch('https://teamtreehouse.com/profiles/spencerrenfro.json')
        .then(response => response.json())
        .then( (data) => {
            setBadgeData(data.badges)
        })

            // images.map( (item) => {
                     
            //          return (
            //              <ul className="grid grid-cols-4">
            //                  <li>
            //                      {
            //                          <div className="">
 
            //                              <h1>{props.title}</h1>
            //                              <img src={item} />
            //                          </div>
                                     
 
            //                      }
            //                  </li>
            //              </ul>
            //          )
            //      })}
    }




    // ----------------
    const testArrary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function print(testArrary, images) {
        for (const prop in testArrary) {
            console.log(prop)
            for (const p in images) {
                console.log(p);
            }
        }
    }

    function forIN(images, item) {
        for (const property of images) {
            React.createElement(
                'li',
                {},
                `<img src={${item}} />`
            )

            return (

                <li><img src={item} /></li>
            );
        }
    }

    function forLoop(images) {
        for (let i = 0; i < 1; i++) {
            <h1>Title</h1>
            for (const prop in images) {
                return (
                    <li><img src={images} /></li>
                );
            }
        }
    }

    async function awaitBadges(images) {
        

       var BADGES =[];
       BADGES = await BADGES.push( images.map((item) => {
            var badges = [];
            badges.push(item)
            // await badges.push(item)
            // badges  =  await item.push(images);
            console.log(badges);
            console.log(`array-length: ${badges.length}`)
            return (
           
                    <li>
                    {
                        <div className="">
                            <img src={item} alt=""/>
                        </div>
                        
                    }
                </li>
               
            )
        })
       )
       for(let i = 0; i < BADGES.length; i++){
        console.log(BADGES[i] + "badges");
       }
       
    }

     const awaitBadges2 = (images)  => {
        images.map( async (item) => {
                     const imageArray = await [<img src={item} alt=""/>]
            return (
            <li>
                <img src={item} alt=""/>
                <img src={imageArray} alt=""/>
            </li>    
            );
        })
    }

    // const image = React.createElement("img", {}, "-----");


    return (
        <div className="">

            {/*works for long list of images ---START*/}

             <ul className="grid grid-cols-4 overflow-auto  max-h-[40rem]">
                {images.map( (item) => {
                     
                    return (
                        <ul className="grid grid-cols-4">
                            <li>
                                {
                                    <div className="">

                                        <h1>{props.title}</h1>
                                        <img src={item} />
                                    </div>
                                    

                                }
                            </li>
                        </ul>
                    )
                })}
            </ul> 
            
                 {/*works for long list of images ---END*/}

{/* 
            <ul className="grid grid-cols-4 overflow-auto  max-h-[40rem]">
            {awaitBadges(images)}
            {awaitBadges2(images)}
            </ul> */}

{/* 
            {loadData()} */}
        </div>
    );
}


// <ul className="grid grid-cols-4">
// {/* <li><img width="60" src={props.image} alt={props.title}/></li> */}
// {images.map((item) => {

//     return( 
//     <ul className="grid grid-cols-4">
//     <li>
//         {
//             <img src={item}/>
//         }
//     </li>
//     </ul>
//     )
// })}




// nested looop



// return statement
// {/* <li><img width="60" src={props.image} alt={props.title}/></li> */}
// {images.map((item) => {

//     return( 
//     <ul className="grid grid-cols-4">
//         {/* {createList(item)}{console.log(item)} */}
//         {forIN(images, item)}
//     </ul>
//     )
// })}


// function calls
{/* <li><img width="60" src={props.image} alt={props.title}/></li> */ }
{/* {images.map((item) => {

            return( 
            <ul className="grid grid-cols-4"> */}
{/* {createList(item)}{console.log(item)} */ }
{/* {forIN(images, item)} */ }
{/* {forLoop(images)} */ }
{/* {print(testArrary,images)} */ }
{/* </ul> */ }
{/* )
        })} */}