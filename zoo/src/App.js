import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ZooList from './pages/zoo.list';
import Home from './pages/home';
import About from './pages/about';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact="" path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/zoo-list" component={ZooList}/>
        </div>
      </Router>
    );
  }
}

export default App;
