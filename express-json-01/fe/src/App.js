import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import User from './user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>React.js, Axios and Express.js example</h1>
            <User axios={axios}/>
        </header>
      </div>
    );
  }
}

export default App;
