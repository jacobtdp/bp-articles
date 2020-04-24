import React from 'react';
import './App.css';

import Main from './main/Main';

import Nav from './nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Nav />

      </header>

        <div className="body-wrapper">
          <div>.</div>
          <div><Main /></div>
          <div>.</div>
        </div>

    </div>
  );
}

export default App;
