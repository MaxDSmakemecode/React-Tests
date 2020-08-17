import React from 'react';
import './App.css';
import MyFirstComponent from './components/myFirstComponent';
import ParentComponent from './components/parentComponent.jsx';
import ImgSlider from './components/img-slider/imgSlider'

// Firt comment in development branch for git
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            scroll down for fun
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <MyFirstComponent />
          <ParentComponent />
          <ImgSlider />
        </main>
      </div>
    );
  }
}

export default App;
