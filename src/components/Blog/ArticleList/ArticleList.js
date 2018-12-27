import React from 'react';
import './ArticleList.css';

class ArticleList extends React.Component {

    constructor() {
        super();
        this.state = {
            postList: null,
            postPages: null,
            postPagesLength: 1, //placeholder
            activePostPage: 1,
        }
    }

    componentDidMount() {
        this.setupPostListing();
    }


    openBlogPost = (postId) => {
        const { openBlog } = this.props;
        openBlog(postId);
    }

    //assign the postList from props and pass to buildPostList
    setupPostListing = () => {
        const { passPostListing } = this.props;
        var postListing = passPostListing();
        //console.log(postListing);
        //this.buildPostList(postListing);
        this.buildPostPages(postListing);
    }

    //assign posts to arrays of 5 posts inside an array, for building search pages
    buildPostPages = (postListing) => {
        var postPages = [];
        var arrayPage = 0;
        postPages.push([]);
        postListing.forEach(post => {
            if (postPages[arrayPage].length < 5) {
                postPages[arrayPage].push(post);
            } else {
                postPages.push([]);
                arrayPage++;
                postPages[arrayPage].push(post);
            }
        });

        //console.log(postPages);
        this.setState({ postPages: postPages, postPagesLength: postPages.length });
        
        this.buildPostList(postPages);
    }

    //iterate through the passed in postList, returning the jsx object for each post, then set the list of posts for displaying
    buildPostList = (postListing) => {
        var newPostList = postListing[this.state.activePostPage - 1].map((post, i) => {
            //console.log("target postPage = " + (this.state.activePostPage - 1))
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

    changePage = (page) => {
        // console.log("postpage = " + this.state.activePostPage)
        // console.log("page = " + page);
        var newPostPage = this.state.activePostPage + page;
        //console.log("newPostPage = " + newPostPage)
        this.setState({ activePostPage: newPostPage }, () => {
            this.buildPostList(this.state.postPages);
        });
        // console.log("newPostPage = " + this.state.activePostPage);

    }

    render() {
        return (
            <div className="listContainer">
                {this.state.postList}
                <div className="pageButtonContainer">
                    {
                        this.state.activePostPage > 1 //If on first page, don't display back button
                            ? <p className="pageButton pointer" onClick={() => this.changePage(-1)}>{this.state.activePostPage - 1}</p>
                            : null
                    }
                    <p className="pageButtonCurrent pointer">{this.state.activePostPage}</p>

                    {
                        this.state.activePostPage < this.state.postPagesLength //if on last page, don't display forward button
                        ?<p className="pageButton pointer" onClick={() => this.changePage(+1)}>{this.state.activePostPage + 1}</p>
                        : null
                    }
                </div>
            </div>

        )
    }

}

export default ArticleList;