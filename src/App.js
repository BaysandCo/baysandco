import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pageHeader">Bays & Co</div>
        <div className="location">
          <span className="label">New York | Washington, D.C.</span>
        </div>
        <div className="email">
          <a 
            title="Email Nathan@BaysandCo.com" 
            className="label" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="mailto:Nathan@BaysandCo.com">Nathan@BaysandCo.com
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
