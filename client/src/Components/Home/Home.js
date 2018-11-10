import React, { Component } from 'react';

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
                <h1 style={{"font-size":"28px","font-weight": "bold"}}><strong>Fri </strong>Nov.11, 2018</h1>
              </div>
              <div className="col-md-6">
                <p className="float-right" style={{"font-size":"20px","font-weight": "bold"}}>Partly Cloudy, Long Island City</p>
              </div>
              <div className="col-md-12">
                <img className="img-fluid w-100" src={bannerImg} alt="Banner" />
              </div>
              <div className="col-md-12">
                <img className="rounded mx-auto d-block" src={calcularImg} alt="Calrcular" />
              </div>
            </div>
            
            <hr />
            <button className="mx-auto d-block">Amanda</button>
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
    );
  }
}

export default Home;