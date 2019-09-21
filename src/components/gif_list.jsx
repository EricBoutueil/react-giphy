import React, {Component} from 'react';
import Gif from './gif'

class GifList extends Component {
  renderList = () => {
    // <Gif id=1 />, <Gif id=2 />, ... // --> GifList needs an array
    return this.props.gifs.map( gif => {
      return <Gif id={gif.id} key={gif.id}/>
    });
  }

  render() {
    return (
      // <div className="gif-list"> // prob with col-count=2
      <div className="">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
