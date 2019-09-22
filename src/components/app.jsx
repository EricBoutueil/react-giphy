import React, {Component} from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectGifId: "xT9IgDEI1iZyb2wqo8"
    }

    // this.search("homer"); // simulate typing / the call to search
  }

  search = (query) => {
    // API call
    giphy('jyzyg8sfISDo2hPgr6R1854oRsWDVtsf').search({
      q: query,
      rating: 'g',
      limit: 5
    // }, function (error, result) {
    }, (error, result) => {
      // console.log(result)
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    // const gifs = [ // prev: props because static -> then state to update with input
    //   {id: "xT9IgDEI1iZyb2wqo8"},
    //   {id: "12NUbkX6p4xOO4"}
    // ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchfFunction={this.search}/>
            {//--> App will pass to SearchBar the search function
            }
          <div className="selected-gif">
            {//<Gif id="xT9IgDEI1iZyb2wqo8"/> // static -> static
            }
            <Gif id={this.state.selectGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
