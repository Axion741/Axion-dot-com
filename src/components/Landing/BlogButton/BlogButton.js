import React from 'react';
import Blogshot from './chris-ried-512801-unsplash.jpg';

const BlogButton = ({onRouteChange}) =>{
return(
    <div>
        <img onClick={() => onRouteChange('blog')} className="pointer br-100 w-50 grow shadow-5" src={Blogshot}></img>
        <h2>Check out the dev blog!</h2>
    </div>
);


}

export default BlogButton;