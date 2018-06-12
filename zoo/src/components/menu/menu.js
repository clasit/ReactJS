import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './menu-item';
import './menu.css';

class Menu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false
    }
  }

  handleClick = () => {
    this.setState({toggleMenu: !this.state.toggleMenu});
  }
  
  render(){
    let slideClass;
    this.state.toggleMenu
      ? slideClass = 'slideInLeft slide-menu'
      : slideClass = 'slideInRight';
    
    return(
      <div className="main-container">
        <button type="button" onClick={this.handleClick}>
          <span>Abreme</span>
        </button>
        <MenuItem slideClass={slideClass} onClick={this.handleClick}></MenuItem>
        <div className={slideClass}>
          <Link to="/">
            <span className="glyphicon glyphicon-home"></span>
          </Link>
          <Link to="/about">
            <span className="glyphicon glyphicon-cloud-download"></span>
          </Link>
          <Link to="/zoo-list">
            <span className="glyphicon glyphicon-trash"></span>
          </Link>
          <Link to="/form-animal">
            <span className="glyphicon glyphicon-upload"></span>
          </Link>
        </div>
      </div>
    );
  }
}

const element = <h1>Welcome</h1>;

export default Menu;
