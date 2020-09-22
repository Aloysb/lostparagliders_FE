import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Button from '../../components/Button';

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Has this equipment been stolen?</h1>
        <h2>
          A website to find out if the paragliding equipment you are buying has
          been stolen or not!
        </h2>
        <Button title='first' />
      </header>
    </div>
  );
};

export default Home;
