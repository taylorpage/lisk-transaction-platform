import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

// Child components
import Platform from './Platform';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login}/>
        <Route path="/platform" component={Platform}/>
      </div>
    );
  }
}

export default App;
