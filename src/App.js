import './App.css';
import Card from './components/Card';
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe"
import { ThemeContext } from './contexts/ThemeContext';
import { useRef, useEffect, useState, useContext } from 'react';
import { Route, Routes } from "react-router-dom";


// Routes
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Works from './components/Works';
// subRoutes
import Polytopia from './components/Polytopia';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', `${isDarkMode ? 'dark' : 'light'}`);
  }, [isDarkMode]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2">
        <Card />

        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />}>
            <Route path="polytopia" element={<Polytopia/>}></Route>
          </Route>
        </Routes>


      </div>
    </div>
  );
}

export default App;



{/* <div className="main-content home">
                <Card />
            </div>





{/* <ThemeContext.Provider value={isDarkMode} >
<Navbar setIsDarkMode={setIsDarkMode} />
  
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
           
</ThemeContext.Provider> */}

{/* 
// <ThemeContext.Provider value={isDarkMode} >
// <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
//  <div className="flex gap-56">
//    <Card />
//    <Navbar setIsDarkMode={setIsDarkMode}/>
//  </div >
//  <AboutMe />
// </div > 
// </ThemeContext.Provider>  */}



// extra working 
{/* <ThemeContext.Provider value={isDarkMode} >
<div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
 <Navbar setIsDarkMode={setIsDarkMode}/>
<Routes>
 <Route path="/" element={<Home/>}/>
</Routes>
</div>

</ThemeContext.Provider>  */}






// dark/ light theme changer that didnt work 
// // theme changer

// // icones
// const sunIcon = document.querySelector(".sun");
// const moonIcon = document.querySelector(".moon");


// // theme vars --- opitional 
// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// // icon toggling
// const iconToggle = () => {
//   moonIcon.classList.toggle("display-none");
//   sunIcon.classList.toggle("display-none");
// }

// // Initial Theme CVHeck
// const themeCheck = () => {
//   if (userTheme === "dark" || (!userTheme && systemTheme)) {
//     document.documentElement.classList.add("dark");
//     moonIcon.classList.add("display-none");
//     return;
//   }
//   sunIcon.classList.add("display-none");
// };

// // Manual Theme Switch
// const themeSwitch = () => {
//   if(document.documentElement.classList.contains("dark")) {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//     iconToggle();
//     return;
//   }
//   document.documentElement.classList.add("dark");
//   localStorage.setItem("theme", "dark");
//   iconToggle();
// };

// // call them switch on clicking buttons
// sunIcon.addEventListener("click", () => {
//   themeSwitch();
// });

// moonIcon.addEventListener("click", () => {
//   themeSwitch();
// });


// // invoke them check on inital load
// themeCheck();