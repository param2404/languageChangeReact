import React, { Component } from 'react';
import { render } from 'react-dom';
import { Locale } from './components/Locale';
import { Home } from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Locale>
          <Home />
        </Locale>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));