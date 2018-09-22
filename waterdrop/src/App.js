import React, { Component } from 'react';

import main from './components/pages/main';
import citas from './components/pages/citas';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

/*import MyNavbar from './components/navbar/navbar';
import MyImage from './components/principal-img/image';
import Rowi from './components/row/row';
import MyCards from './components/cards/cards';*/


class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Switch>
            <Route exact path="/" component={main} />
            <Route exact path="/agendarcita" component={citas} />
          </Switch>
        </div>
      </Router>

      
    );
  }
}

export default App;
