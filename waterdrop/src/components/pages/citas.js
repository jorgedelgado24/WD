import React, { Component } from 'react';
import '../../App.css';
import MyNavbarCitas from '../navbarcitas/navbarcitas';
import API from "../../api/api";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

class citas extends Component {
/*
  state = {
    empresas: [],
    fechas: "",
    horarios: "",
    empresaElegida: "",
    fechaElegida: "",
    horarioElegido: ""
}

  componentDidMount()
  {
      this.loadEmpresas();
  }

  loadEmpresas()
  {
      API.getEmpresas()
      .then((empresas) => {
        console.log(empresas);
          this.setState({empresas: empresas.data});
      })
      .catch(err => {
          alert("Error trying to load Empresas.");
      });
  }
*/



    render() {
      return (
        <div className="App">
        <MyNavbarCitas/>

        
        <Container>
        <Row>
          <Col-3></Col-3>
          <Col-6>
          <FormGroup>
          <Label for="exampleSelect">Selecciona tu Empresa</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>GE</option>
            <option>Axtel</option>
            <option>Neoris</option>
          </Input>
        </FormGroup>
          </Col-6>
          <Col-3></Col-3>
        </Row>
        </Container>

        


        </div>
  
        
      );
    }
  }
  
  export default citas;