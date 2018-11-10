import React, { Component } from 'react';

import productImg from '../../Img/product.png';
import product2Img from '../../Img/product2.png';
import product3Img from '../../Img/product3.png';

class Product extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={productImg} alt="product" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={product2Img} alt="product2" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card p-1" style={{width: '18rem'}}>
              <img className="card-img-top" style={{height: '220px'}} src={product3Img} alt="product3" />
            </div>
          </div>
        </div>
    );
  }
}

export default Product;