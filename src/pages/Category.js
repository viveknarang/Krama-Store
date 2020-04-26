import React from 'react';
import './Category.css';
import ProductCard from '../components/ProductCard';

class Category extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

            <div class="row">

                  <div class="col s3 m3 l3 space-top">

                        <div class="collection">
                          <a href="#!" class="collection-item">Alvin</a>
                          <a href="#!" class="collection-item active  purple darken-1">Alvin</a>
                          <a href="#!" class="collection-item">Alvin</a>
                          <a href="#!" class="collection-item">Alvin</a>
                        </div>

                  </div>

                  <div class="col s9 m9 l9 space-top">

                        <div class="row">
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                          <div class="col s12 m12 l4">
                                <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                          </div>
                        </div>


                  </div>

            </div>

            <br/>


      </React.Fragment>
    );
  }
}

export default Category