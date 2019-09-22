import React, {Component} from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    // console.log(event.target.value); // -> need call the giphy API -> will change state of App -> function in App
    this.props.searchfFunction(event.target.value)
  }

  render() {
    return (
      <input type="text" className="from-control form-search"
        onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
