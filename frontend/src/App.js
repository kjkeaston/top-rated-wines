import React, { Component } from "react";
import "./App.css";
import MyRoutes from "./config/routes.js";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <div className="app">
      <Header />
        <div className="container">
          <div className="content">
            { MyRoutes }
          </div>
        </div>
        <footer className="footer">© Kyle Easton 2019</footer>
      </div>
    );
  }
}

export default App;
