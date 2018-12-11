import React from 'react';
import './Blog.css';
import ArticleList from './ArticleList/ArticleList';

class Blog extends React.Component {

    constructor() {
        super();
        this.state = {
            listActive: true,
            post: {
                id: "",
                title: '',
                date: '',
                keywords: '',
                author: '',
                content: ``
            }
        }
    }

    // componentDidMount() {
    //     this.buildPost("002");
    // }

    openBlog = (postId) => {
        this.buildPost(postId);
        this.setState({ listActive: false });
    }

    closeBlog = () => {
        this.setState({ listActive: true });
    }

    buildPost = (postId) => {
        const { getBlogPost } = this.props;
        this.setState({ post: getBlogPost(postId) });
    }

    passPostListing = () => {
        const {getPostListing} = this.props;
        var postListing = getPostListing();
        return postListing;
    }

    render() {
        const post = this.state.post;
        return (
            <div className="blogMasterContainer">
                <div className="blogContentContainer">
                    {this.state.listActive === true
                        ? <ArticleList openBlog={this.openBlog} passPostListing={this.passPostListing}/>
                        : <div className="blogContainer">
                            <div className="postHeader">
                                <div className="postTitle">
                                    <h1>{post.title}</h1>
                                </div>
                                <div className="postHeadFooter">
                                    <div className="postDate">
                                        <p>{post.date}</p>
                                    </div>
                                    <div className="keywords">
                                        <p>Keywords: {post.keywords}</p>
                                    </div>
                                    <div className="author">
                                        <p>Posted by: {post.author}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="postBody">
                                {post.content}
                            </div>
                        </div>
                    }



                    <div className="sidebar">
                        <h1>Sidebar</h1>
                        <h1>Sidebar</h1>
                        <h1>Sidebar</h1>
                        <h1>Sidebar</h1>
                        <h1>Sidebar</h1>
                    </div>
                </div>
                    
                {this.state.listActive === false
                    ?<h1 onClick={() => this.closeBlog()} >Back</h1>
                    : null
                }
            </div>
        );
    }




}

export default Blog;