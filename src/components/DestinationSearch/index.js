import {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="search-header">Destination Search</h1>
        <div className="searchBar-container">
          <input type="text" className="search-bar" />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search-icon"
          />
        </div>
      </div>
    )
  }
}

export default DestinationSearch
