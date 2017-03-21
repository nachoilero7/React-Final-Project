import React, { Component } from 'react'

import Utils from './Utils'

export default class ResultsContainer extends Component {
  render () {
    
    const artists = Utils.getArtists(this.props.data);

    return (
      <div className="results-container">
        <div>
          {artists}
        </div>
      </div>
    )

  }
}
