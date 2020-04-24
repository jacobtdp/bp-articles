import React from 'react';
import './App.css';

import Main from './main/Main';
import Links from './links/Links';
import Nav from './nav/Nav';
import Ad from './ad/Ad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Nav />

      </header>

        <div className="body-wrapper">
          <div><Links /></div>
          <div><Main /></div>
          <div><Ad /></div>
        </div>

    </div>
  );
}

export default App;
