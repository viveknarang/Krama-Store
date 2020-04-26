import React from 'react';
import './Search.css'

class Search extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

                <div class="row purple darken-1">
                  <div class="input-field col s12 m12 l12">
                    <i class="material-icons prefix search-text">search</i>
                    <textarea id="q" class="materialize-textarea search-text" placeholder="Find A Product"></textarea>
                  </div>
                </div>

      </React.Fragment>
    );
  }
}

export default Search