import React, { Component } from 'react';

import interview2Img from '../../Img/interview2.png';
import interview3Img from '../../Img/interview3.png';
import interview4Img from '../../Img/interview4.jpg';
import interview5Img from '../../Img/interview5.png';

class Interview extends Component {
  constructor(props){
    super(props);
    this.state = {
        showMore1: false,
        showMore2: false,
        showMore3: false,
        showMore4: false
    };
  }
  
  render() {
    const {showMore1, showMore2, showMore3, showMore4} = this.state;
        
    let infor1;
    let infor2;
    let infor3;
    let infor4;
    
    let detail = (
            <div className="inline">
              <button><i class="far fa-credit-card"></i>Online Shop</button>
              <button className="float-right"><i class="fas fa-shopping-cart"></i>Go to Store</button>
            </div>
        );
    
    if(showMore1){
        infor1 = detail;
    }
    if(showMore2){
        infor2 = detail;
    }
    if(showMore3){
        infor3 = detail;
    }
    if(showMore4){
        infor4 = detail;
    }
    
    
    return (
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview2Img} alt="interview2"
                onClick={() => {
                    this.setState(prevState => ({
                        showMore1: !prevState.showMore1
                    }));
                }}/>
            </div>
            {infor1}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview3Img} alt="interview3"
              onClick={() => {
                  this.setState(prevState => ({
                      showMore2: !prevState.showMore2
                  }));
              }}/>
            </div>
            {infor2}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview4Img} alt="interview4"
              onClick={() => {
                  this.setState(prevState => ({
                      showMore3: !prevState.showMore3
                  }));
              }}/>
            </div>
            {infor3}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={interview5Img} alt="interview5"
              onClick={() => {
                  this.setState(prevState => ({
                      showMore4: !prevState.showMore4
                  }));
              }}/>
            </div>
            {infor4}
          </div>
        </div>
    );
  }
}

export default Interview;