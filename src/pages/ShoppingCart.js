import React from 'react';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

            <div class="row">
                  <div class="col s12 m6 l6 align-left">
                          <h5 class="title-spacing-left">Your Shopping Cart</h5>
                  </div>
                  <div class="col s12 m6 l6 align-right">
                                <a class="waves-effect waves-light btn-large purple darken-1 title-spacing-right" href="/shopping-cart/empty">
                                  <i class="material-icons left">delete_sweep</i>Empty Shopping Cart</a>
                  </div>            
            </div>

            <div class="row product-spacing-left product-spacing-right">
              <div class="col s12 m12 l12">
                <div class="card">
                  <div class="card-content align-left">
                    <span class="card-title">Product Name</span>
                      <div class="row">
                          <div class="col s12 m6 l6 align-right">
                                      <select>
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                      </select>                            
                          </div>
                          <div class="col s12 m6 l6 align-right">
                                <h5>$12345.6</h5>
                          </div>
                      </div>
                  </div>
                  <div class="card-action align-right">
                      <a class="waves-effect waves-light btn purple darken-1" href="/product/1234"><i class="material-icons">delete</i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row product-spacing-left product-spacing-right">
                  <div class="col s12 m6 l6 align-left">
                                <h5>Total: $12345.6</h5>
                  </div>
                  <div class="col s12 m6 l6 align-right">
                                <a class="waves-effect waves-light btn-large purple darken-1 title-spacing-right" href="/checkout">
                                  <i class="material-icons left">exit_to_app</i>Checkout</a>
                  </div>            
            </div>
            
            <br/>

      </React.Fragment>
    );
  }
}

export default ShoppingCart