import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MenuAbanico from './components/menuabanico/menuabanico';
import TodoForm from './components/lista/listaformulario/listaformulario';

class App extends Component {
  render() {
    return (
      <div>        
        <Router>          
          <div>
            <MenuAbanico/>
            <Route exact path="/" component={TodoForm}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
