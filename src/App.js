import React, { Component } from 'react';
import ProfessionalButton from './components/ProfessionalButton/ProfessionalButton';
import BlogButton from './components/BlogButton/BlogButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to Kyle's Site!</h1> 
        <div className = "flex w-100">
          <div className="fl w-50">
            <ProfessionalButton />
          </div>
          <div className="fl w-50">
            <BlogButton  />
          </div>
        </div>
         

      </div>
      
    );
  }
}

export default App;
