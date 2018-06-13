import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ZooList from './pages/zoo.list';
import CountryList from './pages/country-list';
import About from './pages/about';
import logo from './logo.svg';
import './App.css';
import AnimalForm from './pages/animal.form';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CountryList}/>          
        </div>
      </Router>
    );
  }
}

export default App;
