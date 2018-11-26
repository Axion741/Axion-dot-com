import React from 'react';
import Headshot from './Headshot.jpg';

const ProfessionalButton = ({onRouteChange}) =>{


return(
    <div >
        <img onClick={() => onRouteChange('cv')} className="pointer br-100 w-50 grow shadow-5" src={Headshot} alt="CvLink"></img>
        <h2>Find out more about me!</h2>
    </div>
);


}

export default ProfessionalButton;