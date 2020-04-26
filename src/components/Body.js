import React from 'react';
import Product from '../pages/Product';
import Category from '../pages/Category';
import Home from '../pages/Home';
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
                    <Route path={`/category/:categoryID`}>
                      <Category/>
                    </Route>
                    <Route path={`/home`}>
                      <Home/>
                    </Route>
                  </Switch>

                </Router>

            </div>
          </React.Fragment>
    );
  }
}

export default Body