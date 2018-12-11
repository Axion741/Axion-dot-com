import React from 'react';
import './ArticleList.css';

class ArticleList extends React.Component {

    constructor() {
        super();
        this.state = {
            postList: null,
        }
    }

    componentDidMount() {
        this.setupPostListing();
    }


    openBlogPost = (postId) => {
        const { openBlog } = this.props;
        openBlog(postId);
    }

    setupPostListing = () => {
        const { passPostListing } = this.props;
        var postListing = passPostListing();
        console.log(postListing);
        this.buildPostList(postListing);
    }

    buildPostList = (postListing) => {
        var newPostList = postListing.map((post, i) => {
            return (
                <div key={i} className="listedArticle">
                    <h1 className="articleTitle pointer" onClick={() => this.openBlogPost(post.id)}>{post.title}</h1>
                    <div className="infoContainer">
                        <p className="articleAuthor"> By: {post.author}</p>
                        <p className="articleKeywords"> Keywords: {post.keywords}</p>
                        <p className="articleDate">Posted: {post.date}</p>
                    </div>
                </div>
            );
        })
        this.setState({ postList: newPostList })
    }

    addPost = (post) => {
        console.log(post);
    }

    render() {
        return (
            <div className="listContainer">
                {this.state.postList}
            </div>
        )
    }

}

export default ArticleList;