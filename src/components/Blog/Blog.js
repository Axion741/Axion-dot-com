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
        this.setState({listActive: false});
    }

    closeBlog = () => {
        this.setState({listActive: true});
    }

    buildPost = (postId) => {
        const { grabBlogPost } = this.props;
        this.setState({ post: grabBlogPost(postId) });
    }

    render() {
        const post = this.state.post;
        return (
            <div className="blogMasterContainer">
                {this.state.listActive === true
                    ? <ArticleList openBlog={this.openBlog}/>
                    : <div className="blogContainer">
                        <div className="postHeader">
                            <div className="postTitle">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="postHeadFooter">
                                <div className="postDate">
                                    <h2>{post.date}</h2>
                                </div>
                                <div className="keywords">
                                    <h2>Keywords: {post.keywords}</h2>
                                </div>
                                <div className="author">
                                    <h2>Posted by: {post.author}</h2>
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
                <div>
                    <h1 onClick={() => this.closeBlog()} >Back</h1>
                </div>
            </div>
        );
    }




}

export default Blog;