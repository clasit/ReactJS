import React, { Component } from 'react';
import SlidingMenu from '../../components/menu/menu'; 

class MenuSlider extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false
    }
  }

  handleClick = () => {
    console.log(this.state.toggleMenu);
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
        <SlidingMenu slideClass={slideClass} onClick={this.handleClick}>
          <span className="glyphicon glyphicon-home"></span>
          <span className="glyphicon glyphicon-cloud-download"></span>
          <span className="glyphicon glyphicon-trash"></span>
          <span className="glyphicon glyphicon-upload"></span>
        </SlidingMenu>
      </div>
    );
  }
}

const element = <h1>Welcome</h1>;

export default MenuSlider;