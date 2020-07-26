import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Asparagus from './components/Asparagus';
import Webcam from 'react-webcam';
import Monitor from './components/pages/Monitor'
import About from './components/pages/About'

import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Asparagus />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <br></br>
              <Webcam />
            </React.Fragment>
          )} />
          <Route path="/monitor" component={Monitor} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
