import React, { Component } from 'react';

import success from './img/success.png';

export class DominiksBeer extends Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }

    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <a onClick={this.handleClick}><img height={300} width={300} src={success} alt="logo"/> {this.state.counter}  </a>;
    }
}
