import React from 'react';
import './ArticleList.css';

class ArticleList extends React.Component {

    constructor() {
        super();
        this.state = {
            postList: null,
            postPages: null,
            postPagesLength: 1, //placeholder
            postPagesLengthBookend: 1, //placeholder
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
        this.setState({ postPages: postPages, postPagesLength: postPages.length, postPagesLengthBookend: (postPages.length -2) },
        () => {this.buildPostList(postPages)})
    }

    //iterate through the passed in postList, returning the jsx object for each post, then set the list of posts for displaying
    buildPostList = (postListing) => {
        var newPostList = postListing[this.state.activePostPage - 1].map((post, i) => {
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

    //change page based on modifier on page buttons below (+1/-1)
    changePage = (pageModifier) => {
        var newPostPage = this.state.activePostPage + pageModifier;
        this.setState({ activePostPage: newPostPage }, () => {
            this.buildPostList(this.state.postPages);
        });
    }

    //Jump to first or last page
    firstPage = () => {
        this.setState({activePostPage: 1}, () => {this.buildPostList(this.state.postPages)})
    }

    lastPage = () => {
        this.setState({activePostPage: this.state.postPagesLength}, () => {this.buildPostList(this.state.postPages)})
    }

    render() {
        return (
            <div className="listContainer">
                {this.state.postList}
                <div className="pageButtonContainer">
                    
                    {
                        this.state.activePostPage > 2   //if past the second page, display the "first" button 
                            ? <div className="bookends">
                                <p className="pageButton pointer" onClick={() => this.firstPage()}>First</p>
                                <p>...</p>
                              </div>
                            : null
                    }

                    {
                        this.state.activePostPage > 1 //If on first page, don't display back button
                            ? <p className="pageButton pointer" onClick={() => this.changePage(-1)}>{this.state.activePostPage - 1}</p>
                            : null
                    }

                    <p className="pageButtonCurrent pointer">{this.state.activePostPage}</p>

                    {
                        this.state.activePostPage < this.state.postPagesLength //if on last page, don't display forward button
                            ? <p className="pageButton pointer" onClick={() => this.changePage(+1)}>{this.state.activePostPage + 1}</p>
                            : null
                    }

                    {
                        this.state.activePostPage <= (this.state.postPagesLengthBookend) //if at least 2 away from the end, display the "last" button 
                            ? <div className="bookends"> 
                                <p>...</p>
                                <p className="pageButton pointer" onClick={() => this.lastPage()}>Last</p>
                              </div>
                            : null
                    }

                </div>
            </div>

        )
    }

}

export default ArticleList;