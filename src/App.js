import React, { Component } from 'react';
import './App.css';
import success from './img/success.png';

import { DominiksBeer } from './DominiksBeer';
import { ErrorBoundary } from './ErrorBoundary';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={success} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <DominiksBeer />
        <DominiksBeer />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><DominiksBeer /></ErrorBoundary>
      <ErrorBoundary><DominiksBeer /></ErrorBoundary>
        </p>
      </div>
    );
  }
}

export default App;
