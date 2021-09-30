import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggle: true  }
  }

  handleClick() {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    return (
      <button onClick={()=> this.handleClick()}>{this.state.toggle ? "♡" : "♥"}</button>
    );
  }
}

export default Toggle