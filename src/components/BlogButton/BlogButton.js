import React from 'react';
import Blogshot from './chris-ried-512801-unsplash.jpg';

const BlogButton = () =>{
return(
    <div>
        <img className="br-100 w-50" src={Blogshot}></img>
        <h2>Check out the dev blog!</h2>
    </div>
);


}

export default BlogButton;