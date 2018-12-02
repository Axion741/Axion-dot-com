import React from 'react';
import './Blog.css';

const Blog = ({onRouteChange}) =>{


    return(
    <div className="masterContainer">
        <h1>Blog</h1>
        <h2 onClick={() => onRouteChange('landing')} className="pointer grow">Back</h2>
    </div>
);


}

export default Blog;