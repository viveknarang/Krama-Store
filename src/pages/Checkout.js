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
                      <li class="active">
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

                              <a class="waves-effect waves-light btn-large purple darken-1 modal-trigger" href="#PaymentModal">
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
                                <label>Shipping Address</label>
                              </div>                          

                              <a class="waves-effect waves-light btn-large purple darken-1 modal-trigger" href="#AddressModal">
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

            <div id="PaymentModal" class="modal">
              <div class="modal-content">
                <h5 class="align-left">New Payment Method</h5>
                <div class="align-left">

                        <div class="row">
                          <form class="col s12">
                            <div class="row">
                              <div class="input-field col s6">
                                <i class="material-icons prefix">person</i>
                                <input id="card_first_name" type="text" class="validate"/>
                                <label for="card_first_name">First Name</label>
                                <span class="helper-text" data-error="wrong" data-success="right">First name as mentioned on the card</span>
                              </div>
                              <div class="input-field col s6">
                                <input id="card_last_name" type="text" class="validate"/>
                                <label for="card_last_name">Last Name</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Last name as mentioned on the card</span>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s12">
                                <i class="material-icons prefix">credit_card</i>
                                <input id="card_number" type="text" class="validate"/>
                                <label for="card_number">Card Number</label>
                                <span class="helper-text" data-error="wrong" data-success="right">16 digit card number</span>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s6">
                                <i class="material-icons prefix">date_range</i>
                                <input id="expiry" type="text" class="text"/>
                                <label for="expiry">MM/YY</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Card expiry date in MM/YY format</span>
                              </div>
                              <div class="input-field col s6">
                                <i class="material-icons prefix">security</i>
                                <input id="cvv" type="password" class="validate"/>
                                <label for="cvv">CVV</label>
                                <span class="helper-text" data-error="wrong" data-success="right">You can find this code on the back of your card</span>
                              </div>
                            </div>
                          </form>
                        </div>

                </div>
              </div>
              <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn purple darken-1">Add</a>&nbsp;
                        <a href="#!" class="modal-close waves-effect waves-green btn purple darken-1">Cancel</a>
              </div>
            </div>


            <div id="AddressModal" class="modal">
              <div class="modal-content">
                <h5 class="align-left">New Address</h5>
                <div class="align-left">
                  

                        <div class="row">
                          <form class="col s12">
                            <div class="row">
                              <div class="input-field col s6">
                                <input id="first_name" type="text" class="validate"/>
                                <label for="first_name">First Name</label>
                              </div>
                              <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate"/>
                                <label for="last_name">Last Name</label>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s12">
                                <input id="address_line1" type="text" class="validate"/>
                                <label for="address_line1">Address Line 1</label>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s12">
                                <input id="address_line2" type="text" class="validate"/>
                                <label for="address_line2">Address Line 2 (optional)</label>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s6">
                                <input id="city" type="text" class="validate"/>
                                <label for="city">City</label>
                              </div>
                              <div class="input-field col s6">
                                <input id="state" type="text" class="validate"/>
                                <label for="state">State</label>
                              </div>
                              <div class="input-field col s6">
                                <input id="country" type="text" class="validate"/>
                                <label for="country">Country</label>
                              </div>
                              <div class="input-field col s6">
                                <input id="pincode" type="text" class="validate"/>
                                <label for="pincode">Pin Code</label>
                              </div>
                            </div>
                          </form>
                        </div>

                </div>
              </div>
              <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn purple darken-1">Add</a>&nbsp;
                    <a href="#!" class="modal-close waves-effect waves-green btn purple darken-1">Cancel</a>
              </div>
            </div>

      </React.Fragment>
    );
  }
}

export default Checkout