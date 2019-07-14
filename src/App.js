import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h2>This is app component</h2>
      <div>Otro texto</div>
    </div>
  );
}

export default App;
