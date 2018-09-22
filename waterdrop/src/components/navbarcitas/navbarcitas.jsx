import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import './navbarcitas.css';
var imageName = require('../../assets/Capture.PNG')

export default class MyNavbarCitas extends Component {
  render() {
    return (
      <div>
        <Navbar className = "navbarperrona" style={{marginBottom:'0px'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <a id="logo" href="#home">
                <img src={imageName} alt="water"/>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <h4 id="agenda">Agenda tu Lavada</h4>
        </Navbar>
      </div>
    );
  }
}
