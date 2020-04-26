import React from 'react';
import './MultiProductWidget.css'

import Carousel from 'react-multi-carousel';
import ProductCard from './ProductCard';

import 'react-multi-carousel/lib/styles.css';

class MultiProductWidget extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>


              <div class="row">
                <div class="col s12 m12 l12">
                  <div class="float-left title-left-spacing"><h5>{this.props.widgetName}</h5></div>
                </div>
              </div>

              <div class="row">
                <div class="col s12 m12 l12">
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={true}
                    responsive={{
                      desktop: {
                        breakpoint: {
                          max: 3000,
                          min: 1024
                        },
                        items: 4
                      },
                      mobile: {
                        breakpoint: {
                          max: 464,
                          min: 0
                        },
                        items: 1
                      },
                      tablet: {
                        breakpoint: {
                          max: 1024,
                          min: 464
                        },
                        items: 4
                      }
                    }}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                  >


                        <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                  
                        <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>

                        <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>

                        <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>

                        <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>
                  
                        <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>

                        <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>

                        <ProductCard src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Product Name" currency="$" price="1234.5"/>


                  </Carousel>

              </div>
            </div>

      </React.Fragment>
    );
  }
}

export default MultiProductWidget