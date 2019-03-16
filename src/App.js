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
    ],
    otherState : 'some other value',
    showPersons: false
  } 

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;   // fetch current persons array into const variable
    persons.splice(personIndex, 1);       // deleting one element of specific index
    this.setState({persons: persons})     // updating current state by passing new version of persons array
  }

  // list of suporrted events here https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8124210?start=0    
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
       persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // return we returning JSX code here, which is our functional component Person
            return <Person 
              click={() => this.deletePersonHandler(index)}
              // click={this.deletePersonHandler(bind(this, index))}
              name={person.name}
              age={person.age} />
          })}
        </div>
       );
    }

    return (
      // This is not HTML! This is JSX
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p> This is realy working!</p>
        <button 
          style = {style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* persons variable which contains JSX code */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
