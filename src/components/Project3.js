export default function ProjectThree() {
    const loginGif = `${process.env.PUBLIC_URL}/Gifs/log-in-form.gif`;
    return (
        <div className="pt-5 pb-5">
                       <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-8">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </div>

                <div className="col-span-12 lg:col-span-4">
                    <h1 className="text-primary-content text-3xl justify-center font-bold ">Login Form</h1>
                    <h2 className="text-primary-content text-2xl justify-center">Authenticator</h2>
                    <p className="text-xl pt-10"> 
                        Polytopia is a 2D chess like strategy game where you build an army, and conqure the enemy villages
                    </p>
                    <p className="text-xl pt-10"> 
                        For each attack there is a formula that is done that is based off the attackers health, attack rating,
                        as well as the defenders health, defense rating, and even attack force (if the defender is not killed
                        during attackers attack there is retaliation damage done to the attacker)
                    </p>

                </div>

            </div>
            <div className="flex justify-center">
                <h1 className="mt-10 text-primary-content text-3xl justify-center font-bold ">Log in Form</h1>
            </div>
            <div className="mt-10 pb-10">
                <div className="flex justify-center pb-10">
                <p className="text-xl text-primary-content">This is a log in/ register form. This is built on an on using React useState, onClick function,
                    and ternary operators to change from the log in form to the register form.
                </p>
                </div>
                <div className="flex justify-center ">
                    <img src={loginGif} alt="" />
                </div>
            </div>

        </div>
    );
}
