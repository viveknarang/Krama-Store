import React from 'react';
import Image from './Image';

import './ProductCard.css'

class ProductCard extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

                  <div class="card space-right space-left">
                          <div class="card-image">
                            <a href="/product/1234">
                              <Image src={this.props.src}
                              alt={this.props.alt}
                              width="100%"
                              height="100%"
                              />
                            </a>
                            <span class="card-title"></span>
                          </div>
                          <div class="card-content align-left">
                            <p>{this.props.name}</p>
                          </div>
                          <div class="card-action align-right">
                                  <div class="float-left"><b>{this.props.currency}{this.props.price}</b></div>
                                  <a href="/product/1234">View</a>
                          </div>
                  </div>

      </React.Fragment>
    );
  }
}

export default ProductCard