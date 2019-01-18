import React, { Component } from 'react';
import Appy from './piano.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          {Appy()}
          

        </header>
      </div>
    );
  }
}

export default App;
