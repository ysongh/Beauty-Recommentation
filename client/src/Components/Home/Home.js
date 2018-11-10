import React, { Component } from 'react';

import './Home.css';

import lipstickImg from '../../Img/lipstick.png';
import bannerImg from '../../Img/banner.png';
import calcularImg from '../../Img/calcular.png';

class Home extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
              <div className="col-md-1">
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
              <div className="col-md-5">
                <h1 style={{"fontSize":"28px","fontWeight": "bold"}}><strong>Fri </strong>Nov.11, 2018</h1>
              </div>
              <div className="col-md-6">
                <p className="float-right" style={{"fontSize":"20px","fontWeight": "bold"}}>Partly Cloudy, Long Island City</p>
              </div>
              <div className="col-md-12">
                <img className="m-0" id="bannerImg" src={bannerImg} alt="Banner" />
                <img className="rounded mx-auto d-block" id="calcularImg" src={calcularImg} alt="Calrcular" />
              </div>
              <div className="col-md-12">
                
                <h1 className="text-center" style={{"fontSize":"20px","fontWeight": "bold"}}>Interview for Estee Lanuder</h1>
              </div>
            </div>
            
            <hr />
            
            <p className="text-center">-- Tips for Amanda --</p>
            
              <div className="card">
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
    );
  }
}

export default Home;