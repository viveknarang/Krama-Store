import React from 'react';
import Image from '../components/Image';
import './Header.css';

class Header extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
          <React.Fragment>

              <div className="header z-depth-3">

                      <div class="company-logo">
                        <Image src="http://placehold.jp/350x100.png" width="350px" height="100px" alt="Company Name" notBlur={true}/>
                      </div>

              </div>

          </React.Fragment>
    );
  }
}

export default Header