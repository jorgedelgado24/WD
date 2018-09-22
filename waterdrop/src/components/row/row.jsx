import React from 'react';
import { Row, Col, } from 'reactstrap';
import './row.css';
var imageName = require('../../assets/placeholder.png')
var imageName2 = require('../../assets/calendar-2.png')
var imageName3 = require('../../assets/raindrop.png')
var imageName4 = require('../../assets/locked.png')
var imageName5 = require('../../assets/time.png')
var imageName6 = require('../../assets/sprout.png')

export default class Rowi extends React.Component {
  render() {
    return (
      <div>
        <Row id ="rowperrona">
          <Col id= "textoenrow">En Waterdrop ofrecemos lavado directo a tu oficina. Agenda tu hora y nosotros nos encargamos de lo demás</Col>    
        </Row>
        <br/>
        <br/>
        
        <Row id = "rowperrona2">
            <Col xs="4" sm="4" md="4" lg="4">
                <img src={imageName} alt="placeholder"/>
                <p className="placeholder1">SELECCIONA</p>
                <p className="placeholder2">TU</p>
                <p className="placeholder3"> EMPRESA</p>
                <p className="placeholder4">Selecciona tu oficina y llena tus datos.</p>
            </Col>
            <Col xs="4" sm="4" md="4" lg="4">
                <img src= {imageName2} alt="agenda"/>
                <p className="placeholder3" id="calendario">AGENDA</p>
                <p className="placeholder4">Selecciona el día y la hora en que deseas que acuda una de nuestras unidades para prestarte el servicio que hayas solicitado.</p>
            </Col>
            <Col xs="4" sm="4" md="4" lg="4">
                <img src={imageName3} alt="gota"/>
                <p className="placeholder1">LAVA</p>
                <p className="placeholder4" id="gotita">Revisa en tiempo real el estatus, desde la confirmación de tu solicitud hasta la terminación del servicio y califícanos.</p>
            </Col>
        </Row>
        <br/>
        <hr/>
        <br/>
        <Row id = "rowperrona3">
            <Col xs="1" sm="1" md="1" lg="1">
                <img src={imageName4} alt="candado" id="lock-foto"/>
            </Col>
            <Col xs="3" sm="3" md="3" lg="3">
                <p id="lock">Paga al Final</p>
                <p className="lock-text">Aceptamos distintos métodos de</p>
                <p className="lock-text">pago para tu conveniencia y</p>
                <p className="lock-text">complétalo hasta terminar nuestro</p>
                <p className="lock-text">servicio</p>
            </Col>
            <Col xs="1" sm="1" md="1" lg="1">
                <img src={imageName5} alt="reloj" id="relojito"/>
            </Col>
            <Col xs="3" sm="3" md="3" lg="3">
            <p id="relojito-titulo">Programa a tu tiempo</p>
            <p className="relojito-text">Agenda previamente tu lavado</p>
            <p className="relojito-text">para evitar contratiempos</p>
            
            </Col>
            <Col xs="1" sm="1" md="1" lg="1">
                <img src={imageName6} alt="planta" id="planta"/>
            </Col>
            <Col xs="3" sm="3" md="3" lg="3">
                <p id="planta-titulo">Cuidamos el ambiente</p>
                <p className="planta-text">Utilizamos productos que cuidan el</p>
                <p className="planta-text">medio ambiente sin desperdiciar</p>
                <p className="planta-text">agua</p>
            </Col>
        </Row>
        <Row>
            <Col id = "tipos">Tipos de Lavado</Col>
        </Row>
        

        
       </div>
        
    );
  }
}