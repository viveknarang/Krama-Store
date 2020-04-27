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

import Search from './Search';
import Settings from '../pages/Settings';
import ShoppingCart from '../pages/ShoppingCart';
import MyOrders from '../pages/MyOrders';
import Checkout from '../pages/Checkout';

class Body extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
          <React.Fragment>
            <div className="body-x z-depth-3">
            <Search/>
            
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
                    <Route path={`/settings`}>
                      <Settings/>
                    </Route>
                    <Route path={`/shopping-cart`}>
                      <ShoppingCart/>
                    </Route>
                    <Route path={`/my-orders`}>
                      <MyOrders/>
                    </Route>
                    <Route path={`/checkout`}>
                      <Checkout/>
                    </Route>
                  </Switch>
                </Router>

            </div>
          </React.Fragment>
    );
  }
}

export default Body