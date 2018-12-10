import React from 'react';
import './ArticleList.css';

class ArticleList extends React.Component {


    openBlogPost = (postId) => {
        const {openBlog} = this.props;
        openBlog(postId);
    }



    render() {
        return (
            <div className="listContainer">
                <div className="listedArticle">
                    <h1 onClick={() => this.openBlogPost("001")}>Test Post 1</h1>
                </div>
                <div className="listedArticle">
                    <h1 onClick={() => this.openBlogPost("002")}>Test Post 2</h1>
                </div>
            </div>
        )
    }

}

export default ArticleList;