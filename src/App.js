import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Main from './components/mainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className = "container">
        <h1 className="App-title">Welcome to Pokemon</h1>
        </div>
        </header>
        <div className = "container">
        <Main />
        </div>
       
      </div>
    );
  }
}

export default App;
