import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) { // used to access the value of an input, if want to do validation, or have diff inputs
    super(props);

    this.state = {
      term: ""
    }

  }

  handleUpdate = (event) => {
    this.setState({
      term: event.target.value
    });
    // console.log(event.target.value); // -> need call the giphy API -> will change state of App -> function in App
    this.props.searchfFunction(event.target.value)
  }

  render() {
    return (
      <input
        value={this.state.term}
        type="text"
        className="from-control form-search"
        onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
