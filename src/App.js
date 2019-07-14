import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Investment from './components/Investment/Investment'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Investment/>

    </div>
  );
}

export default App;
