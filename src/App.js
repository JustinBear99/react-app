import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Asparagus from './components/Asparagus';
//import Webcam from 'react-webcam';
import Home from './components/pages/Home'
import Monitor from './components/pages/Monitor'
import About from './components/pages/About'
import Control from './components/pages/Control'


import './App.css';

class App extends Component {
  render(){
    return (
      <div>
          <Router>
          <div className="App">
            <Asparagus />
            <Route exact path="/" component={Home}/>
            <Route path="/control" component={Control} />
            <Route path="/monitor" component={Monitor} />
            <Route path="/about" component={About} />
          </div>
        </Router>
        <footer style={{float:'center'}}>Copyright &copy; 2020, Justin Bear</footer>
      </div>
    );
  }
}

export default App;
