import React from 'react';
import './App.css';
import './css/todolist.css';
import MyFirstComponent from './components/myFirstComponent';
import ParentComponent from './components/parentComponent.jsx';
import ImgSlider from './components/img-slider/imgSlider'
import TodoList from './components/todolist/TodoList'

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
          <MyFirstComponent />
          <ParentComponent />
        </header>
        <main>
          <ImgSlider />
          <TodoList />
        </main>
      </div>
    );
  }
}

export default App;
