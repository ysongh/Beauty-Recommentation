import React, { Component } from 'react';

import interview2Img from '../../Img/interview2.png';

class ImageList extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview2Img} alt="interview2" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview2Img} alt="interview2" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview2Img} alt="interview2" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview2Img} alt="interview2" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview2Img} alt="interview2" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview2Img} alt="interview2" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview2Img} alt="interview2" />
            </div>
          </div>
        </div>
    );
  }
}

export default ImageList;