import React, { Component } from 'react';
import './App.css';

import Button from './components/buttons'
import Title from './components/title'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Button />
      </div>
    );
  }
}

export default App;
