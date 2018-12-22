import React, { Component } from 'react';
import ProfessionalCV from './components/ProfessionalCV/ProfessionalCV';
import Blog from './components/Blog/Blog';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Postfile from './postfile.json';

import './App.css';

class App extends Component {



  constructor() {
    super();
    this.state = {
      route: 'landing',
      post: Postfile.post, //Needs UN-JSONifying?
    }
    //console.log(this.state.post)
  }

  onRouteChange = (route) => {
    if (route === 'landing') {
      this.setState({ route: 'landing' })
    }
    else if (route === 'cv') {
      this.setState({ route: 'cv' })
    }
    else if (route === 'blog')
      this.setState({ route: 'blog' })
  }

  getBlogPost = (postId) => {
    let selectedPost = this.state.post.find(x => x.id === postId);
    return selectedPost;
  }

  getPostListing = () => {
    let postListing = this.state.post;
    return postListing;
  }

  render() {
    return (
      <div className="App" >
        <Navbar onRouteChange={this.onRouteChange} />

        {this.state.route === 'landing'
          ? <Landing onRouteChange={this.onRouteChange} />
          : null
        }

        {
          this.state.route === 'cv'
            ? <ProfessionalCV />
            : null
        }

        {
          this.state.route === 'blog'
            ? <Blog getBlogPost={this.getBlogPost} getPostListing={this.getPostListing} />
            : null
        }

        <Footer />
      </div>

    );
  }






}

export default App;
