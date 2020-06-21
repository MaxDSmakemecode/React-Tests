import React from 'react';
import './App.css';
import MyFirstComponent from './components/myFirstComponent';
import ParentComponent from './components/parentComponent.jsx';

// Firt comment in development branch for git
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyFirstComponent />
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
