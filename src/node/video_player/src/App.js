import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { HomePage } from './pages'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={HomePage} />
      </div>
    );
  }
}

export default App;
