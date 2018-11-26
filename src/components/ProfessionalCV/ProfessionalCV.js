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
                            <h2>Section 1</h2>
                            <h2>01/01/2018</h2>
                        </div>
                        <p>Kyle is awesome and you should hire him.</p>
                    </div>

                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>Section 2</h2>
                            <h2>06/01/2018</h2>
                        </div>
                        <p>Kyle is pretty cool and you should hire him.</p>
                    </div>

                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>Section 3</h2>
                            <h2>09/01/2018</h2>
                        </div>
                        <p>Kyle is the best and you should hire him.</p>
                    </div>

                    <div className="cvCell">
                        <div className="cellHeader">
                            <h2>Section 4</h2>
                            <h2>02/04/2018</h2>
                        </div>
                        <p>You get the idea.</p>
                    </div>


                </div>

            </div>



            <h2 onClick={() => onRouteChange('landing')} className="pointer grow">Back</h2>
        </div>
    );


}

export default ProfessionalCV;