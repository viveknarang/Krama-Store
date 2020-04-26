import React from 'react';
import ProductWidget from '../components/ProductWidget';
import MultiProductWidget from '../components/MultiProductWidget';

import './Home.css'

class Home extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
              <div class="row">
                    <div class="col s12 m12 l12  space-top">
                          <ProductWidget auto={true}/>
                    </div>
              </div>
              <div class="row">
                    <div class="col s12 m12 l12">
                          <MultiProductWidget widgetName="Inspired by your browing history"/>
                    </div>
              </div>
              <div class="row">
                    <div class="col s12 m12 l12">
                          <MultiProductWidget widgetName="You might like"/>
                    </div>
              </div>
              <div class="row">
                    <div class="col s12 m12 l12">
                          <MultiProductWidget widgetName="New Arrivals / Price Drop"/>
                    </div>
              </div>

          <br/>

      </React.Fragment>
    );
  }
}

export default Home