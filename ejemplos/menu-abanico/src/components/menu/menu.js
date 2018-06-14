import React, { Component } from "react";
import './menu.css';

class SlidingMenu extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div className={"sliding-menu animated " + this.props.slideClass}>
          <button type="button" onClick={this.props.onClick}>
            <span>Cierrame</span>
          </button>
          {this.props.children}
        </div>
      );
    }
  } 
export default SlidingMenu;