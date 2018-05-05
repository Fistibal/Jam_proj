import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            search: ''
          }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleEnterPress = this.handleEnterPress.bind(this);
    }

search() {
   this.props.onSearch(this.state.searchTerm);
}

handleTermChange(event) {
   this.setState({searchTerm: event.target.value});
}

handleEnterPress(event) {
    if (event.key === 'Enter') {
        this.search()
    }
  }

    render() {
        return (
            <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist"
            onChange={this.handleTermChange} onKeyPress={this.handleEnterPress} />
            <a onClick={this.search}>SEARCH</a>
          </div>
        )
    }
}

export default SearchBar;
