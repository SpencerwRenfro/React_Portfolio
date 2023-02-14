export default function Polytopia(){
    return(
        <div className=" overflow-auto  max-h-[40rem]">
            <h1 className="mt-10 ml-10 mr-10 text-primary-content text-xl">Polytopia Battle Calculator </h1>
            <h2 className="mt-10 text-primary-content text-xl ml-3">What it does</h2>
            <p className="mt-2 text-xl ml-3 mr-10">This is a damage calculator that the mobile game of Polytopia uses for their characters. This allows you to select the type of character you 
                want to see the battle results of, while being able to change some input variables of the game. Variables such as, input health, defense, poison, 
                attack boost and veteran.
            </p>
            <h2 className="mt-10 text-primary-content text-xl ml-3 " >Challenge</h2>
            <p className="mt-2 text-xl ml-3 mr-10">
                I had no issues developing this code in C, but it was not user friendly in the version I initially developed. Having to only use keyboard inputs, 
                it was not ideal, so my next step was to take this to JavaScript, and being able to use markup languages and DOM interaction. This made my project
                 more complex to create a user friendly design. Lastly I joined with a senior developer to take this project further with React.js. The change from vanilla javascript to React was huge in this project’s user interface. Functionally, the code is the same in all three projects, but in React it is dynamically changing the user’s selection and rendering images and automatically generating the results based on the selection.
            </p>

            <h2 className="mt-10 text-primary-content text-xl ml-3">Transitions: C-Code</h2>
            <p className="mt-2 text-xl ml-3 mr-10" >This code works by importing a text file of the character data into an array on start, then the code will prompt the user for input of either an integer of the character name from the displayed list, following being prompted for a number input for the health. This is scanned then used to search the character array for a match, and the match if found will show the character data or display there was not a match. The user 
                is then prompted for other defense or attack bonuses and then lastly the battle results are calculated based on the users’ inputs. </p>

            <h2 className="mt-10 text-primary-content text-xl ml-3">JavasCript</h2>
            <p className="mt-2 text-xl ml-3 mr-10">This code is functionally the same but instead of prompting the user for inputs, the inputs are stored from onClick events using 
            the DOM. This layout was created by using two form layouts, one for the attacker and one for the defender. </p>

            <h2 className="mt-10 text-primary-content text-xl ml-3">React</h2>
            <p className="mt-2 text-xl ml-3 mr-10">
            Lastly in React the user interface is much nicer with using a CSS framework of Tailwind, and I have incorporated an API to load all of the characters 
            with React Query instead of having all the character data hard coded.
            </p>
        </div>
    );
}