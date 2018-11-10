import React, { Component } from 'react';
import './App.css';

import lipstickImg from './Img/lipstick.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 className="text-center">Beauty Recommentation</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                OutFit
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/">Make Up</a>
                <a className="dropdown-item" href="/">Health</a>
                <a className="dropdown-item" href="/">Other</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <button className="float-right">Login</button>
          </div>
          <div className="col-md-9">
            
          </div>
          <div className="col-md-3">
            <div class="card">
              <div class="card-body">
                <p style={{"font-size":"20px","font-weight": "bold"}}>2:00pm</p>
                <p style={{"font-size":"20px","font-weight": "bold"}}>Gym</p>
              </div>
            </div>
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
                  <h5 className="card-title">OutFit for Today</h5>
                  <p className="card-text">Bussiness Casual</p>
                  <a href="/" className="btn btn-primary p-2 pr-4 mr-1">Like</a>
                  <a href="/" className="btn btn-primary p-2">Dislike</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="card-img-top" src={lipstickImg} alt="LipStick" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Stressed Out?</h5>
                  <p className="card-text">Tips for getting relaxed</p>
                  <a href="/" className="btn btn-primary p-2 pr-4 mr-1">Like</a>
                  <a href="/" className="btn btn-primary p-2">Dislike</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="card-img-top" src={lipstickImg} alt="LipStick" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">3 Minutes Make Up</h5>
                  <p className="card-text">For Interview</p>
                  <a href="/" className="btn btn-primary p-2 pr-4 mr-1">Like</a>
                  <a href="/" className="btn btn-primary p-2">Dislike</a>
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