import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import './navbar.css';
import { Link } from "react-router-dom";
var imageName = require('../../assets/Capture.PNG')

export default class MyNavbar extends Component {
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
          <Nav id="tripas">
            <NavItem id="primera" eventKey={1} href="#rowperrona2">
              Como Funciona
            </NavItem>
            <NavItem id="segunda" eventKey={2} href="#rowperrona3">
              Beneficios
            </NavItem>
            <Link to="/agendarcita" id="tercera" eventKey={3} className={window.location.pathname === "/agendarcita" ? "menu-active" : ""}>Agendar Cita</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
