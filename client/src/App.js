import React, { Component } from 'react';
import './App.css';

import lipstickImg from './Img/lipstick.png';

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
        
      </div>
    );
  }
}

export default App;