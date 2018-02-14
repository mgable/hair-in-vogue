import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import BasicDisplay from './Display/Basic.js';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Nav />
          <BasicDisplay />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;