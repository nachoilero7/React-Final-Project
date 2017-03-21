import ResultsContainer from './ResultsContainer'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      query: this.props.value, 
      data: {}, 
      inputCleared: false 
    }

  }

  componentDidMount(){
    this.onlyChange(this);
  }

  handleChange (event) {

    const query = event.target.value.trim().toLowerCase()

    if (this.state.query === query) {
      return
    }

    this.setState({ query })
    this.submitSearch(query)
  }

  onlyChange (event) {
      this.submitSearch(this.state.query)
  }


  submitSearch (keyword) {

    if (!keyword.length > 0) {
      this.setState({ data: {}, inputCleared: true })
      return
    }

    this.setState({ inputCleared: false })

    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(keyword)}&type=artist`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (this.state.inputCleared || !data || keyword !== this.state.query) {
          return
        }

        this.setState({data: data});
      })
  }



  render () {
    return (
      <div >
        <p className="list-text">You are currently searching: {this.state.query}</p>
        <div className="list-view__s">
          <input type="text" name="search" className="list-view__search-query" onChange={this.handleChange.bind(this)} placeholder= "Search your favorite artist here..."/> 
        </div>
        <hr/>
        <div id="resultado" className="list-view__results">
           <ResultsContainer data={this.state.data} />  
        </div>
                
      </div>
    )
  }
}
