import React from 'react';
import "./ProfessionalCV.css";

const ProfessionalCV = ({ onRouteChange }) => {


    return (
        <div className="masterContainer">
            <h1>CV</h1>

            <div className="cvContainer">

                <div className="cvFlavour ba">
                    <h1>Flava Flave</h1>
                    <h2>Supa Flave is a mega flave in the flava flave wave</h2>
                </div>


                <div className="cvBody bb">


                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>Kyle Ballagher</h2>
                            <h2>k.ballagher@gmail.com</h2>
                        </div>
                        <div className="profLinks">
                            <a href='https://www.linkedin.com/in/kyleballagher/'>LinkedIn</a>
                            <a href='https://github.com/Axion741'>GitHub</a>
                            <a href='https://axion-smartbrain.herokuapp.com/'>Axion's SmartBrain</a>
                        </div>


                    </div>

                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>Key Skills and Training</h2>
                        </div>

                        <div className="skillBlock">
                            <div className="skillList">
                                <p>C# (Primarily in the Unity Editor)</p>
                                <p>Basic Android Development with XML and JavaScript</p>
                                <p>Experience with Visual Studio and VS Code</p>
                            </div>
                            <div className="skillList">
                                <p>Full Stack Web Development</p>
                                <p>React.js framework, with Node.js and Express.js Server</p>
                                <p>PostgreSQL relational database management</p>
                            </div>

                        </div>

                    </div>

                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>Online Learning</h2>
                        </div>
                        <div className="courseLinks">
                            <a href="https://www.udemy.com/unitycourse/">Complete C# Unity Developer 2D: Learn to Code Making Games - Ben Tristem (Ongoing)</a>
                            <a href="https://www.udemy.com/the-complete-web-developer-in-2018/">The Complete Web Developer 2019: Zero to Mastery - Andrei Neagoie</a>
                            <a href="https://eu.udacity.com/course/android-basics-nanodegree-by-google--nd803">Google Developer Challenge: Android Basics</a>
                        </div>
                    </div>



                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>"Project Potential"</h2>
                            <h2>Unity RPG - Android</h2>
                        </div>
                        <p>Turn-based RPG written in C# with the Unity3D engine.</p>
                        <p>Features basic RPG leveling mechanics and enemies of increasing difficulty.</p>
                        <p>Basis for "Project Godai", a huge expansion on the "Project Potential" formula.</p>
                        <p>Available on the Google Play Store for free <a className="boldLink" href="https://play.google.com/store/apps/details?id=com.Axion741.ProjectPotential">here!</a></p>
                    </div>

                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>"Project SmartBrain"</h2>
                            <h2>Full Stack React App</h2>
                        </div>
                        <p>Final project of the Complete Web Developer course.</p>
                        <p>Features a React.js front-end, with an integrated face-detection API.</p>
                        <p>Also features a Node.js/Express.js server, and a PostgreSQL database.</p>
                        <p>Hosted on Heroku, link up top!</p>
                    </div>

                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>"Project Godai"</h2>
                            <h2>Unity RPG - Android</h2>
                        </div>
                        <p>Major expansion on "Project Potential".</p>
                        <p>Features multiple characters with independent leveling.</p>
                        <p>Features expanded enemy types with different attack patterns and abilities.</p>
                        <p>Currently in alpha, pre-release APKs are available from GitHub.</p>
                    </div>




                </div>

            </div>



            <h2 onClick={() => onRouteChange('landing')} className="pointer grow">Back</h2>
        </div>
    );


}

export default ProfessionalCV;