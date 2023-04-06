import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import { ThemeContext } from "./contexts/ThemeContext";
import { useRef, useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";

// Routes
// import Home from "./components/Home";
import Resume from "./components/Resume";
import Works from "./components/Works";
// subRoutes
import Polytopia from "./components/Polytopia";
import ProjectTwo from "./components/ProjectTwo";
import Project3 from "./components/Project3";
// sub-sub-Routes
import ReactPreview from "./components/ReactPreview";
import CPreview from "./components/CPreview";
import JSPreview from "./components/JSPreview";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", `${isDarkMode ? "dark" : "light"}`);
  }, [isDarkMode]);

  // fetch request

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  // end

  return (
    <div className="bg-base-300 grid  md:grid-cols-1">
      {/* <div  className="dark:bg-black dark:text-white dark:bg-none">
          FOR EDITING THEME COLOR */}
      <div className=" flex justify-center bg-base-300">
        {/* className="sm:grid grid-rows-3" */}
        <Navbar />
      </div>
      <div className="grid  md:grid-cols-2 xl:grid-cols-2 bg-base-300">
        <Card />

          <div>
            <div className="pr-8">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          <Route path="works" element={<Works />}>
            <Route path="polytopia" element={<Polytopia />} />
            <Route path="polytopia/react-preview" element={<ReactPreview />} />
            <Route path="polytopia/c-preview" element={<CPreview />} />
            <Route path="polytopia/javascript-preview" element={<JSPreview />} />
            <Route path="projecttwo" element={<ProjectTwo />} />
            <Route path="projectthree" element={<Project3 />} />
          </Route>
        </Routes>
        </div>
        </div>
      </div>

    </div>
  );
}

export default App;

{
  /* <div className="main-content home">
                <Card />
            </div>





{/* <ThemeContext.Provider value={isDarkMode} >
<Navbar setIsDarkMode={setIsDarkMode} />
  
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
           
</ThemeContext.Provider> */
}

{
  /* 
// <ThemeContext.Provider value={isDarkMode} >
// <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
//  <div className="flex gap-56">
//    <Card />
//    <Navbar setIsDarkMode={setIsDarkMode}/>
//  </div >
//  <AboutMe />
// </div > 
// </ThemeContext.Provider>  */
}

// extra working
{
  /* <ThemeContext.Provider value={isDarkMode} >
<div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
 <Navbar setIsDarkMode={setIsDarkMode}/>
<Routes>
 <Route path="/" element={<Home/>}/>
</Routes>
</div>

</ThemeContext.Provider>  */
}

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
