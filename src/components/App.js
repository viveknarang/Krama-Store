import React from 'react';
import Footer from './Footer'
import Header from './Header'
import Body from './Body'
import Navigator from './Navigator'

import './App.css'

class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
              <Header/>
              <Navigator/>
              <Body/>
              <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default App