import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggle: true }
  }

  handleClick() {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    return (
      <button class="button big-btn" onClick={()=> this.handleClick()}>{this.state.toggle ? "♡" : "♥"}</button>
    );
  }
}

export default Toggle