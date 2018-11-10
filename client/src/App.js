import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Beauty Recommentation</h1>
        <div className="row align-items-start">
          <div className="col-md-2">
            <div className="inline bg-light">
              <p>Outfit</p>
              <p>Outfit</p>
              <p>Outfit</p>
              <p>Outfit</p>
              <p>Outfit</p>
            </div>
          </div>
          <div className="col-md-10">
            <div className="bg-primary">
              <p>testing</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
