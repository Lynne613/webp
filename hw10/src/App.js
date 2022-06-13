// import logo from './logo.svg';

import './App.css';
import * as React from 'react';
import Personalpage from './userprofile';

const {useState,useEffect}=React;

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
    <Personalpage useState={useState} useEffect={useEffect}/>
  </div>

  );
}

export default App;
