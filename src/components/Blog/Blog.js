import React from 'react';

const Blog = ({onRouteChange}) =>{


    return(
    <div>
        <h1>Blog</h1>
        <h2 onClick={() => onRouteChange('landing')} className="pointer grow">Back</h2>
    </div>
);


}

export default Blog;