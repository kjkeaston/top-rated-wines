import React, { Component } from 'react';
import './App.css';
import MyRoutes from './config/routes.js';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <div className="container">
          <div className="content">
            { MyRoutes }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
