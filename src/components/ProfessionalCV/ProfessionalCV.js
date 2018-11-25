import React from 'react';

const ProfessionalCV = ({onRouteChange}) =>{


    return(
    <div>
        <h1>CV</h1>
        <h2 onClick={() => onRouteChange('landing')} className="pointer grow">Back</h2>
    </div>
);


}

export default ProfessionalCV;