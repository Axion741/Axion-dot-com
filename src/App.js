import React, { Component } from 'react';
import ProfessionalCV from './components/ProfessionalCV/ProfessionalCV';
import Blog from './components/Blog/Blog';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {



  constructor() {
    super();
    this.state = {
      route: 'landing',
      post: [
        {
          id: "001",
          title: 'Test Post',
          date: '01/01/2018',
          keywords: 'Test, Coding',
          author: 'Kyle',
          content: `Here's the blog content! It's neat!`,
        },
        {
          id: "002",
          title: 'Test Post 2',
          date: '01/01/2018',
          keywords: 'Test, Coding',
          author: 'Kyle',
          content: `Here's the blog content! It's great!`,
        }
      ]
    }
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

  grabBlogPost = (postId) => {
    let selectedPost = this.state.post.find(x => x.id === postId);
    return selectedPost;
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
            ? <ProfessionalCV onRouteChange={this.onRouteChange} />
            : null
        }

        {
          this.state.route === 'blog'
            ? <Blog grabBlogPost={this.grabBlogPost} />
            : null
        }

        <Footer />
      </div>

    );
  }






}

export default App;
