import React from 'react';
import logo from './logo.svg';
import './App.css';

const appClasPrefix = 'App'
const App = () => (
      <div className={`${appClasPrefix}`}>
        <header className={`${appClasPrefix}-header`}>
          <img src={logo} className={`${appClasPrefix}-logo`} alt={'logo'} />
          <h1 className={`${appClasPrefix}-title`}>Welcome to React</h1>
        </header>
        <p className={`${appClasPrefix}-intro`}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )

export default App;
