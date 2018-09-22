import React, { Component } from 'react';
import '../../App.css';
import MyNavbar from '../navbar/navbar';
import MyImage from '../principal-img/image';
import Rowi from '../row/row';
import MyCards from '../cards/cards';


class main extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar/>
      <MyImage/>
      <Rowi/>
      <MyCards/>
      </div>

      
    );
  }
}

export default main;