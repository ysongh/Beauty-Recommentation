import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import bannerImg from '../../Img/banner.png';
import calcularImg from '../../Img/calcular.png';
import interviewImg from '../../Img/interview.jpg';
import makeupImg from '../../Img/makeup.png';
import stressImg from '../../Img/stress.jpg';
import beverageImg from '../../Img/beverage.jpg';
import lotionImg from '../../Img/lotion.jpg';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        showMore: false
    };
  }
  
  render() {
    const {showMore} = this.state;
        
        let showImages;
        
        if(showMore){
            showImages = (
                <div>
                  <h1>Hello</h1>
                </div>
            );
        }
        
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
                <img className="img-fluid w-100 m-0" id="bannerImg" src={bannerImg} alt="Banner" />
                <Link to="/schedule">
                  <img className="rounded mx-auto d-block" id="calcularImg" src={calcularImg} alt="Calrcular" />
                </Link>
              </div>
              <div className="col-md-12">
                <h1 className="text-center" style={{"fontSize":"20px","fontWeight": "bold"}}>Interview for Estee Lanuder</h1>
              </div>
            </div>
            <hr />

            <p className="text-center">-- Tips for Amanda --</p>
            
              <div className="card">
                <div className="row">
                  <div className="col-md-3">
                    <img className="card-img-top" id="pictureImg" src={interviewImg} alt="Interview" />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <i class="far fa-trash-alt float-right"></i>
                      <h5 className="card-title">BEST OUTFIT ASPIRES MY DAY</h5>
                      <p className="card-text">What is My Best Business Casual for Today Interview</p>
                      <span><i class="far fa-heart"></i></span>
                      
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                        this.setState(prevState => ({
                            showMore: !prevState.showMore
                        }));
                    }}className="btn btn-light">
                        See More
                    </button>
                    {showImages}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <img className="card-img-top" id="pictureImg" src={makeupImg} alt="MakeUp" />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <i class="far fa-trash-alt float-right"></i>
                      <h5 className="card-title">3 MINUTES MAKEUP FOR OFFICE LADY</h5>
                      <p className="card-text">Quick, professional make up tips for office lady</p>
                      <span><i class="far fa-heart"></i></span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <img className="card-img-top" id="pictureImg" src={stressImg} alt="Stress" />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <i class="far fa-trash-alt float-right"></i>
                      <h5 className="card-title">STRESS OUT? 2 EASY WAYS TO STRETCH AT HOME</h5>
                      <p className="card-text">Follow us, strech up your body, refresh your day!</p>
                      <span><i class="far fa-heart"></i></span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <img className="card-img-top" id="pictureImg" src={beverageImg} alt="Beverage" />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <i class="far fa-trash-alt float-right"></i>
                      <h5 className="card-title">MORNING COFFEE WAKES YOU UP</h5>
                      <p className="card-text">Four types of coffee you want to drink in the morning for your health</p>
                      <span><i class="far fa-heart"></i></span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <img className="card-img-top" id="pictureImg" src={lotionImg} alt="Lotion" />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <i class="far fa-trash-alt float-right"></i>
                      <h5 className="card-title">MOIST TIME: MAKE YOUR FACE ALIVE AGAIN</h5>
                      <p className="card-text">It's time to fresh your skin! Take some tips from us!</p>
                      <span><i class="far fa-heart"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

export default Home;