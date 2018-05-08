import React, { Component } from 'react';
import Main from './components/Main/Main.js';
import Navigation from './components/Navigation/Navigation.js';
import Header from './components/Header/Header.js';
import Patient from './components/Patient/Patient.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Navigation />
          <Main>
            <Patient />
          </Main>
        </div>
      </div>
    );
  }
}

export default App;
