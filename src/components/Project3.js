export default function ProjectThree(){
    const loginGif = `${process.env.PUBLIC_URL}/Gifs/log-in-form.gif`;
    return(
        <div className="pt-5 pb-5">
                    <div className="flex justify-center border-bottom border-bottom">
                <h1 className="mt-10 text-primary-content text-3xl justify-center font-bold ">Log in Form</h1>
            </div>
            <div className="ml-3 mt-10">
            {/* className="mt-2 text-xl ml-3 mr-10 mt-10 mb-10" */}
            <p className="text-xl text-primary-content">This is a log in/ register form. This is built on an on using React useState, onClick function, 
            and ternary operators to change from the log in form to the register form.
            </p>
            <div className="flex justify-center ">
                <img src={loginGif} alt="" />
            </div>
            </div>

        </div>
    );
}
