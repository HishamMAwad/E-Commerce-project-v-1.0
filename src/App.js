import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Pages/header/Header';
import HomePage from './components/Pages/homepage/HomePage';





class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <HomePage/>
      </div>
        
    );
  };
}

export default App;
