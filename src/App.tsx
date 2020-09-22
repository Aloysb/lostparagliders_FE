import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Has this equipment been stolen?</h1>
        <h2>
          A website to find out if the paragliding equipment you are buying has
          been stolen or not!
        </h2>
        <button></button>
      </header>
    </div>
  );
}

export default App;
