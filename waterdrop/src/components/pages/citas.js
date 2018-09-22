import React, { Component } from 'react';
import '../../App.css';
import MyNavbarCitas from '../navbarcitas/navbarcitas';
import API from "../../api/api";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import './citas.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Horas from '../horas/horas';
 
import 'react-datepicker/dist/react-datepicker.css';


class citas extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }



    render() {
      return (
        <div className="App">
        <MyNavbarCitas/>

        
        <Container>
        <Row>
          <Col-3></Col-3>
          <Col-6>
          <FormGroup id="empresa_select">
          <Label for="exampleSelect">Selecciona tu Empresa</Label>
          <Input type="select" name="select" id="empresa">
            <option>GE</option>
            <option>Axtel</option>
            <option>Neoris</option>
          </Input>
        </FormGroup>
          </Col-6>
          <Col-3></Col-3>
        </Row>
        <Row>
          <Col-3></Col-3>
          <Col-6>
          <Label for="exampleSelect">Selecciona el dia</Label>
          <DatePicker selected={this.state.startDate} onChange={this.handleChange} />

          </Col-6>
          <Col-3></Col-3>
        </Row>
        
          <Horas/>
          
        
        </Container>

        


        </div>
  
        
      );
    }
  }
  
  export default citas;