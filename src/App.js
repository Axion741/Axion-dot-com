import React, { Component } from 'react';
import ProfessionalCV from './components/ProfessionalCV/ProfessionalCV';
import Blog from './components/Blog/Blog';
import Landing from './components/Landing/Landing';

import './App.css';

class App extends Component {

constructor() {
  super();
  this.state ={
    route:'landing'
  }
}

onRouteChange = (route) => {
  if (route === 'landing') {
    this.setState({route: 'landing'})
  }
  else if (route === 'cv') {
    this.setState({route: 'cv'})
  }
  else if (route === 'blog')
    this.setState({route: 'blog'})
}


  render() {
    return (
      <div className="App">

      {this.state.route === 'landing'
          ?<Landing onRouteChange={this.onRouteChange}/>
          :null
      }

      {this.state.route === 'cv'
          ?<ProfessionalCV onRouteChange={this.onRouteChange} />
          :null
      }

      {this.state.route === 'blog'
        ?<Blog onRouteChange={this.onRouteChange}/>
        :null
      }

      </div>
      
    );
  }






}

export default App;
