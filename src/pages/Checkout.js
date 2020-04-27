import React from 'react';
import './Checkout.css';

class Checkout extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

            <div class="row">
                  <div class="col s12 m12 l12 align-left">
                          <h5 class="title-spacing-left">Checkout</h5>
                  </div>
            </div>

            <div class="row product-spacing-left product-spacing-right">
              <div class="col s12 m12 l6">

                    <ul class="collapsible">
                      <li>
                        <div class="collapsible-header"><i class="material-icons">credit_card</i>Payment Option</div>
                        <div class="collapsible-body">

                              <div class="input-field">
                                <select>
                                  <option value="" disabled selected>Choose your option</option>
                                  <option value="1">XXXX-XXXX-XXXX-8037</option>
                                  <option value="2">XXXX-XXXX-XXXX-3878</option>
                                  <option value="3">XXXX-XXXX-XXXX-3000</option>
                                </select>
                                <label>Payment Option</label>
                              </div>                          

                              <a class="waves-effect waves-light btn-large purple darken-1" href="/checkout">
                                        <i class="material-icons left">add_box</i>Add A Payment Option</a>

                        </div>
                      </li>
                      <li>
                        <div class="collapsible-header"><i class="material-icons">email</i>Shipping Address</div>
                        <div class="collapsible-body">

                              <div class="input-field">
                                <select>
                                  <option value="" disabled selected>Choose your option</option>
                                  <option value="1">113 Edgar Ave, Canada</option>
                                </select>
                                <label>Payment Option</label>
                              </div>                          

                              <a class="waves-effect waves-light btn-large purple darken-1" href="/checkout">
                                        <i class="material-icons left">add_box</i>Add A Shipping Address</a>

                        </div>
                      </li>
                    </ul>

              </div>
              <div class="col s12 m12 l6">

                      <table class="striped z-depth-3">
                        <tbody>
                          <tr>
                            <td class="item-spacing-left">Shipping Address</td>
                            <td>113 Edgar Ave<br/>
                            Richmond Hill<br/>
                            ON L4C 6K3<br/>
                            Canada</td>
                          </tr>
                          <tr>
                            <td class="item-spacing-left">Payment Method</td>
                            <td>XXXX-XXXX-XXXX-1234<br/>
                                Visa</td>
                          </tr>
                          <tr>
                            <td class="item-spacing-left">Amount</td>
                            <td>$1234.5</td>
                          </tr>
                          <tr>
                            <td class="item-spacing-left">Tax</td>
                            <td>$1234.5</td>
                          </tr>
                          <tr>
                            <td class="item-spacing-left">Shipping</td>
                            <td>$1234.5</td>
                          </tr>
                          <tr>
                            <td class="item-spacing-left"><h5><b>Total</b></h5></td>
                            <td><h5><b>$1234.5</b></h5></td>
                          </tr>
                        </tbody>
                      </table>

              </div>
            </div>

            <br/><br/>

            <div class="row">
                  <div class="col s12 m6 l6 align-left">
                  </div>
                  <div class="col s12 m6 l6 align-right">
                                <a class="waves-effect waves-light btn-large purple darken-1 title-spacing-right" href="/pay">
                                  <i class="material-icons left">payment</i>Make Payment</a>
                  </div>            
            </div>
            
            <br/><br/>

      </React.Fragment>
    );
  }
}

export default Checkout