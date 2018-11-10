import React, { Component } from 'react';

import interview2Img from '../../Img/interview2.png';
import interview3Img from '../../Img/interview3.png';
import interview4Img from '../../Img/interview4.jpg';
import interview5Img from '../../Img/interview5.png';

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
              <img className="card-img-top" style={{height: '220px'}} src={interview3Img} alt="interview3" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview4Img} alt="interview4" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview5Img} alt="interview5" />
            </div>
          </div>
        </div>
    );
  }
}

export default ImageList;