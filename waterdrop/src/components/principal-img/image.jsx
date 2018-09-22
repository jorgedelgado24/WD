import './image.css';
import React, { Component } from "react";
var imageName = require ('../../assets/bg_menu.png');

export default class MyImage extends Component{
    render(){
        return(
            
            <img id="imagen" src={imageName} alt="logo"/>
            
        )
    }
}
