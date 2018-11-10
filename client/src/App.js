import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import Schedule from './Components/Schedule/Schedule';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/schedule" component={Schedule} />
        </div>
      </Router>
    );
  }
}

export default App;