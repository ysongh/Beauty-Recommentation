import React, { Component } from 'react';
import './App.css';

import lipstickImg from './Img/lipstick.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 className="text-center">Beauty Recommentation</h1>
        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="/">Action</a>
            <a className="dropdown-item" href="/">Another action</a>
            <a className="dropdown-item" href="/">Something else here</a>
          </div>
        </div>
        
        <hr />
          
          <div class="card">
            <div className="row">
              <div className="col-md-6">
                <img className="card-img-top" src={lipstickImg} alt="LipStick" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="card-img-top" src={lipstickImg} alt="LipStick" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;