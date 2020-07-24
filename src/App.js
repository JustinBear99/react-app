import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Asparagus from './components/Asparagus';
import Webcam from 'react-webcam';
import Button from './components/Button';
import About from './components/pages/About'

import './App.css';

class App extends Component {
  state = {
    pos: [
      {
        id: 1,
        col: 'a',
        row: 1,
        torf: true
      },
      {
        id: 2,
        col: 'b',
        row: 2,
        torf: false
      },
      {
        id: 3,
        col: 'c',
        row: 3,
        torf: false
      }
    ]
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Asparagus />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Button pos = {this.state.pos}/>
              <br></br>
              <Webcam />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
