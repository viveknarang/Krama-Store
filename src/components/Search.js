import React from 'react';
import './Search.css'

class Search extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

                <div class="container search-box">
                    <textarea id="q" class="materialize-textarea" placeholder="Search A Product ..."></textarea>
                </div>

      </React.Fragment>
    );
  }
}

export default Search