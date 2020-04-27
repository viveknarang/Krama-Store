import React from 'react';
import './Settings.css';

class Settings extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>


            <div class="row">

                  <div class="col s12 m12 l12 align-left title-spacing-left">
                          <h5 class="title-spacing-left">Your Settings</h5>
                  </div>

            </div>

            <div class="row">

                  <div class="col s12 m12 l3">

                        <div class="collection">
                          <a href="#!" class="collection-item">Payment Methods</a>
                          <a href="#!" class="collection-item active  purple darken-1">Address Book</a>
                          <a href="#!" class="collection-item">Wish List</a>
                          <a href="#!" class="collection-item">Account Settings</a>
                        </div>

                  </div>

                  <div class="col s12 m12 l9 space-top">

                  </div>

            </div>

            <br/>


      </React.Fragment>
    );
  }
}

export default Settings