import React from 'react';
import './MultiProductWidget.css'

import Carousel from 'react-multi-carousel';
import Image from './Image';

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

                  <div class="card space-right space-left">
                          <div class="card-image">
                            <a href="/product/1234">
                              <Image src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                              alt="Product Name"
                              width="100%"
                              height="100%"
                              />
                            </a>
                            <span class="card-title"></span>
                          </div>
                          <div class="card-content align-left">
                            <p>Product Name</p>
                          </div>
                          <div class="card-action">
                                  <div class="float-left"><b>$ 123456.7</b></div>
                                  <a href="/product/1234">View</a>
                          </div>
                  </div>


                  <div class="card space-right space-left">
                          <div class="card-image">
                            <a href="/product/1234">
                              <Image src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                              alt="Product Name"
                              width="100%"
                              height="100%"
                              />
                            </a>
                            <span class="card-title"></span>
                          </div>
                          <div class="card-content align-left">
                            <p>Product Name</p>
                          </div>
                          <div class="card-action">
                                  <div class="float-left"><b>$ 123456.7</b></div>
                                  <a href="/product/1234">View</a>
                          </div>
                  </div>

                  <div class="card space-right space-left">
                          <div class="card-image">
                            <a href="/product/1234">
                              <Image src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                              alt="Product Name"
                              width="100%"
                              height="100%"
                              />
                            </a>
                            <span class="card-title"></span>
                          </div>
                          <div class="card-content align-left">
                            <p>Product Name</p>
                          </div>
                          <div class="card-action">
                                  <div class="float-left"><b>$ 123456.7</b></div>
                                  <a href="/product/1234">View</a>
                          </div>
                  </div>

                  <div class="card space-right space-left">
                          <div class="card-image">
                            <a href="/product/1234">
                              <Image src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                              alt="Product Name"
                              width="100%"
                              height="100%"
                              />
                            </a>
                            <span class="card-title"></span>
                          </div>
                          <div class="card-content align-left">
                            <p>Product Name</p>
                          </div>
                          <div class="card-action">
                                  <div class="float-left"><b>$ 123456.7</b></div>
                                  <a href="/product/1234">View</a>
                          </div>
                  </div>

                  <div class="card space-right space-left">
                          <div class="card-image">
                            <a href="/product/1234">
                              <Image src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                              alt="Product Name"
                              width="100%"
                              height="100%"
                              />
                            </a>
                            <span class="card-title"></span>
                          </div>
                          <div class="card-content align-left">
                            <p>Product Name</p>
                          </div>
                          <div class="card-action">
                                  <div class="float-left"><b>$ 123456.7</b></div>
                                  <a href="/product/1234">View</a>
                          </div>
                  </div>

                  <div class="card space-right space-left">
                          <div class="card-image">
                            <a href="/product/1234">
                              <Image src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                              alt="Product Name"
                              width="100%"
                              height="100%"
                              />
                            </a>
                            <span class="card-title"></span>
                          </div>
                          <div class="card-content align-left">
                            <p>Product Name</p>
                          </div>
                          <div class="card-action">
                                  <div class="float-left"><b>$ 123456.7</b></div>
                                  <a href="/product/1234">View</a>
                          </div>
                  </div>

                  

                  </Carousel>

              </div>
            </div>

      </React.Fragment>
    );
  }
}

export default MultiProductWidget