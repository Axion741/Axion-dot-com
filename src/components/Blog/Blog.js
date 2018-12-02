import React from 'react';
import './Blog.css';
import Headshot from "../Landing/ProfessionalButton/Headshot.jpg"

class Blog extends React.Component {

    render() {



        return (
            <div className="blogMasterContainer">
                <div className="blogContainer">
                    <div className="postHeader">
                        <div className="postTitle">
                          <h1>Example Post</h1>  
                        </div>
                        <div className="postHeadFooter">
                            <div className="postDate">
                                <h2>01/01/2018</h2>
                            </div>
                            <div className="keywords">
                                <h2>Test, coding</h2>
                            </div>
                            <div className="author">
                                <h2>Posted by Kyle</h2>
                            </div>
                            <div className="authorImgParent">
                                <img className="authorImg" src={Headshot}/>
                            </div>
                        </div>

                    </div>

                    <div className="postBody">
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                    </div>
                </div>
                <div className="sidebar">
                    <h1>Sidebar</h1>
                    <h1>Sidebar</h1>
                    <h1>Sidebar</h1>
                    <h1>Sidebar</h1>
                    <h1>Sidebar</h1>
                </div>
            </div>
        );
    }




}

export default Blog;