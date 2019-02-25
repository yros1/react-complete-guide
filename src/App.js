import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Throug App component nest here all other components the app might need
class App extends Component {
  render() {
    return (
      // This is not HTML! This is JSX
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p> This is realy working!</p>
        <Person />
        <Person />
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
