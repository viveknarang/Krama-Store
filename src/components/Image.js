import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Image.css'

class Image extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

                <LazyLoadImage
                  alt={this.props.alt}
                  height={this.props.height}
                  src={this.props.src} 
                  width={this.props.width} 
                  effect="blur"/> 

      </React.Fragment>
    );
  }
}

export default Image