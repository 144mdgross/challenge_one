import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Button from './components/buttons';
import Title from './components/title';
import Home from './components/home'
import Random from './components/random'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Router>
          <div>
            <Button />
            <Route exact path="/" component={Home}/>
            <Route path="/random" component={Random}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
