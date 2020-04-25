import React from 'react';
import Product from './Product'
import './Body.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class Body extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
          <React.Fragment>
            <div className="body-x z-depth-3">

                <Router>

                  <Switch>
                    <Route path={`/product/:productID`}>
                      <Product/>
                    </Route>
                  </Switch>

                </Router>

            </div>
          </React.Fragment>
    );
  }
}

export default Body