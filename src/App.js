import './App.css';
import Card from './components/Card';
import Routes from "./components/Routes";
import AboutMe from "./components/AboutMe"

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

function App() {
  return (
    <div className="App">
      <div class="flex gap-56">
        <Card />
        <Routes/>
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
