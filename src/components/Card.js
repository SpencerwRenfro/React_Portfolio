



export default function Card(props) {


    let profileImage = `${process.env.PUBLIC_URL}/images/dan.png`;
 

    return (
        <div>

            <div className="card w-96 bg-neutral  shadow-xl mx-16 mt-10">
                <div className="card-body ">
                
                <figure><img src={profileImage} alt="Spencer Renfro" /></figure>
                    <h2 className="card-title justify-center text-primary-content">Spencer Renfro</h2>
                    <h3 className="bg-base-300 self-center p-1.5 rounded-lg">Front End Developer</h3>
                    <div className="badge badge-primary">primary</div>
                    
                    <div className="card-actions justify-center ">
                        <button className="btn btn-primary">Facebook</button>
                        <button className="btn btn-primary">GitHub</button>
                        <button className="btn btn-secondary">LinkedIn</button>
                    </div>

                    <div>
                        <ul className="bg-base-300 self-center p-1.5 rounded-lg">
                            <li> Phone: 217-313-4416</li>
                            <li>Location: Boulder CO</li>
                            <li>Email: Spencer.renfro13@gmail.com</li>
                            <li>Birthday: October 15 1994</li>
                        </ul>
                    </div>

                    <div className="self-center mt-4">
                        <button className="btn btn-primary flex">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
}