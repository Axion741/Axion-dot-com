import React from 'react';
import "./ProfessionalCV.css";
import Headshot from "../Landing/ProfessionalButton/Headshot.jpg"

const ProfessionalCV = () => {


    return (
        <div className="masterContainer">
            <h1>About Me</h1>

            <div className="cvContainer">

                <div className="cvFlavour ba">
                    <div className="flavourIntro">
                        <div className="flavourIntroText">
                            <h1>Hi there! I'm Kyle!</h1>
                            <h2>I'm a self-taught developer from Manchester, England.</h2>
                        </div>
                        <div className="flavourIntroImg">
                            <img src= {Headshot} alt="Kyle Headshot"></img>
                        </div>
                    </div>
                    <div className="flavourBody">
                        <h2>I'm also a big fan of games, be they video, board or roleplaying!</h2>
                        <p>I have a degree in Biomedical Science from Leeds Beckett University, but over the last few years I've been pivoting towards coding. All of my skills are self-taught or learned from online courses, like the ones listed to the right!</p>
                        <p>A lot of my experience is in C#, as most of my big independent projects have been games in the Unity Engine. The first, "Project Potential", is available for Android devices on the Google Play Store, but nowadays I think of that as more of a vertical slice for "Project Godai".</p>
                        <p>Godai is a huge evolution on everything Potential wanted to be. More characters, more enemies, more progression, and hopefully some better artwork at some point!</p>
                        <p>Besides my game development work in C#, I've more recently been expanding my Web Development skills with React.js, and now this website exists!</p>
                        <p>Outside of my coding, I currently work part-time as a Home Delivery Driver, and spend what little free time I have away from work gaming. As you might expect from looking at my projects, I'm a big fan of video games of almost any kind, from high-strategy to story-heavy RPGs.</p>
                        <p>My partner and I are also apparently on a mission to fill our home with an ever increasing sea of board games, mostly co-operative games that won't start a fight when one of us loses!</p>
                        <p>If you're here viewing this, I hope that you'll take an interest in the work going on here, and take a look at the blog too. It's the best way to see what I'm upto at the moment.</p>
                    </div>
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

        </div>
    );


}

export default ProfessionalCV;