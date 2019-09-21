import React, {Component} from 'react';

class Gif extends Component {
  render() {
    // const source = "https://media2.giphy.com/media/12NUbkX6p4xOO4/200.webp?cid=790b7611438b152010647490de349d195644fb59707deeae&rid=200.gif"; // magic
    // const source = "https://media2.giphy.com/media/xT9IgDEI1iZyb2wqo8/200.gif"; // le wagon
    const source = `https://media2.giphy.com/media/${this.props.id}/200.gif`; // le wagon
    return (
      <img src={source} alt="" className="gif"/>
    );
  }
}

export default Gif;
