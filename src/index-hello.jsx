// import React from 'react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// WITHOUT STATE
// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello, {name}
//     </div>
//   );
// };

// WITH STATE
class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }

  }

  // handleClick() { // not sufficient to use this as the component
  handleClick = () => { // this is not bound correctly to the component
    // Change the state
    // console.log('clicked')
    // this.state.clicked = !this.state.clicked; // cannot change the state directly !
    this.setState({ // change state + re-trigger render
      clicked: !this.state.clicked
    });
  }

  render(){
    // BUILD AND RETURN HTML
    return (
      <div
        className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick} // need call a function, a callback, in the class
      >
        Hello, {this.props.name}
      </div> // need use this
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
