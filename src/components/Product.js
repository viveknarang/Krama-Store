import React from 'react';
import './Product.css'

class Product extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

        <div class="product-container">
          <div class="row">
            <div class="col l5 m5 s12">
                    <img class="product-image-container" src="http://placehold.jp/350x350.png" alt="Product Name"/>
            </div>
            <div class="col l7 m7 s12">

                    <div class="row"><div class="col s12 align-left"><h3>Product Name</h3></div></div>

                    <div class="row">
                      <div class="col s12 m6 l6 align-right"></div>
                      <div class="col s12 m6 l6 align-right"><h5>$ 1234.5</h5></div>
                    </div>

                    <div class="row">
                      <div class="col s12 m12 l12">
                            <br/>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col s12">
                        <content>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                        </content>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col s12 m12 l12">
                            <br/><br/><br/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s12 m6 l6">

                      </div>
                      <div class="col s12 m6 l6">
                            <a class="waves-effect waves-light btn-large btn-block purple darken-1" href="#"><i class="material-icons right">add_shopping_cart</i>Add To Cart</a>
                      </div>
                    </div>

              
            </div>
          </div>
          <br/>
        </div>

      </React.Fragment>
    );
  }
}

export default Product