import React from 'react';
import ProfessionalButton from './ProfessionalButton/ProfessionalButton';
import BlogButton from './BlogButton/BlogButton';

class Landing extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {onRouteChange} = this.props;
        return (
            <div>
                <h1>Welcome to Kyle's Site!</h1>
                <div className="flex w-100 pv5">
                    <div className="fl w-50">
                        <ProfessionalButton onRouteChange={onRouteChange} />
                    </div>
                    <div className="fl w-50">
                        <BlogButton onRouteChange={onRouteChange} />
                    </div>
                </div>
                <h1>I'm a budding developer and gaming fanatic</h1>
            </div>
        );    
    }




}

export default Landing;


