import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Throug App component nest here all other components the app might need
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }
  render() {
    return (
      // This is not HTML! This is JSX
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p> This is realy working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
