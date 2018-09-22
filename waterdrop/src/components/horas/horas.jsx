import React, { Component } from 'react';
import '../../App.css';
import MyNavbarCitas from '../navbarcitas/navbarcitas';
import API from "../../api/api";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Alert } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './horas.css'

class horas extends Component {
render() {
    return (
      <div className="App">


      
      <Container>
      
      <Row  id="row3"> 
        <Col-3></Col-3>
        <Col-6>
        <Label for="exampleSelect">Selecciona tu horario</Label>
        <Row>
        <Col-1>
          <div>
          <Button outline color="success">9:00</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">9:30</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">10:00</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">10:30</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">11:00</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">11:30</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">12:00</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">12:30</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">2:00</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">2:30</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">3:00</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">3:30</Button>{' '}
          </div>
        </Col-1>
        </Row>
        <Row>
        <Col-1>
          <div>
          <Button outline color="success">4:00</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">4:30</Button>{' '}
          </div>
        </Col-1>
        <Col-1>
          <div>
          <Button outline color="success">5:00</Button>{' '}
          </div>
        </Col-1>
        </Row>
        </Col-6>
        <Col-3></Col-3>
      </Row>
      </Container>

      <Button onClick={alert} color="primary" size="lg" id="submit">submit</Button>{' '}
        
      <Alert isOpen="true" color="primary">
        This is a primary alert — check it out!
      </Alert>

        
      }
      

      </div>

      
    );
  }

}
export default horas;