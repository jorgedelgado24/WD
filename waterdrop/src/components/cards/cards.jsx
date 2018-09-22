import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
  import "./cards.css"

const MyCards = (props) => {
  return (
    <div>
    <Row>
        <Col xs="6" sm="6" md="6">
      <Card id="cardperrona">
        
        <CardBody>
          <CardTitle className="titulo">Auto Chico</CardTitle>
          <div className="cardBody">
          <CardSubtitle className="subtitulo">Incluye: </CardSubtitle>
          <CardText className="info"><p>Lavado exterior con encerado</p> 
          <p>Lavado exterior de ventanas</p>
          <p>Lavado de neumáticos y vestimenta.</p></CardText>
          <br/>
          <p className="precio">Precio: $80 Pesos</p>
          </div>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" sm="6" md="6">
      <Card id="cardperrona2">
        
        <CardBody>
          <CardTitle className="titulo">Camioneta</CardTitle>
          <div className="cardBody">
          <CardSubtitle className="subtitulo">Incluye: </CardSubtitle>
          <CardText className="info"><p>Lavado exterior con encerado</p> 
          <p>Lavado exterior de ventanas</p>
          <p>Lavado de neumáticos y vestimenta.</p></CardText>
          <br/>
          <p className="precio">Precio: $100 Pesos</p>
          </div>
        </CardBody>
      </Card>
      </Col>
      </Row>
      <Row>
          <Col id="penum">
          <p>AGENDA UNA CITA</p>
          <Button color="primary" size="lg">Agenda</Button>{' '}
          </Col>
      </Row>
      <Row>
          <Col id="derechos">@Waterdrop derechos reservados</Col>
      </Row>
    </div>
  );
};


export default MyCards;