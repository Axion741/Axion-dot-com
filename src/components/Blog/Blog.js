import React from 'react';
import './Blog.css';
import ArticleList from './ArticleList/ArticleList';
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import Parser from 'html-react-parser';

var images = require.context('./img', true);

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
                content: ``,
            }
        }
    }

    // componentDidMount() {
    //     this.buildPost("002");
    // }

    openBlog = (post) => {
        this.buildPost(post);
        this.setState({ listActive: false });
    }

    closeBlog = () => {
        this.setState({ listActive: true });
    }

    buildPost = (blogPost) => {
        this.setState({ post: blogPost });
        // this.setState({ post: blogPost }, () => {this.updateParsedPost(this.state.post)});

    }

    // passPostListing = () => {
    //     const { getPostListing } = this.props;
    //     var postListing = getPostListing();
    //     return postListing;
    // }

    // updateParsedPost = (post) => {
    //     const postContent = post.content;
    //     const parsedPostContent = Parser(postContent);
    //     const parsedPost = {
    //         id: post.id,
    //         title: post.title,
    //         date: post.date,
    //         keywords: post.keywords,
    //         author: post.author,
    //         content: parsedPostContent,
    //     }
    //     console.log(parsedPostContent)
    //     this.setState({post: parsedPost})
    // }

    render() {
        const post = this.state.post;
        // this.updateParsedPost(post);
        console.log(this.state.post.content)
        return (
            <div className="blogMasterContainer">
                <div className="blogContentContainer">
                    {this.state.listActive === true
                        ? <ArticleList openBlog={this.openBlog} passPostListing={this.passPostListing} />
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
                                {Parser(post.content)}
                                {/* <img src={require("./img/articles/2019/1/react.png")}/>
                                <img src={images("./articles/2019/1/react.png")}/> */}
                            </div>
                        </div>
                    }



                    <div className="sidebar">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="kyleballagher"
                            // autoHeight={true}
                            options={{ height: 605 }}
                        />
                    </div>
                </div>

                {this.state.listActive === false
                    ? <h1 className="backButton pointer" onClick={() => this.closeBlog()} >Back</h1>
                    : null
                }
            </div>
        );
    }




}

export default Blog;
