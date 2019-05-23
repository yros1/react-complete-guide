import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// Throug App component nest here all other components the app might need
class App extends Component {
  state = {
    persons: [
      { id: 'sdafdf', name: 'Max', age: 28 },
      { id: 'dfsefa', name: 'Manu', age: 29 },
      { id: 'teswef', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  } 

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this is alternative of above aproach - spread operator. How to do a copy of object into a new object.
    // const person = Object.assign({}, this.state.persons[personIndex]);

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();   // fetch current persons array into const variable. Slice() does a copy of array and returns it to variable.
    const persons = [...this.state.persons];       // usage of ES6 sprerad operator as an alternative to above slice() example.
    persons.splice(personIndex, 1);               // deleting one element of specific index
    this.setState({persons: persons})             // updating current state by passing new version of persons array
  }

  // list of suporrted events here https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8124210?start=0    
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
       persons = <Persons 
                  persons = {this.state.persons} 
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangedHandler} />;
    }    

    return (      
        // This is not HTML! This is JSX
        <div className={classes.App}>
          <Cockpit 
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons} 
            clicked = {this.togglePersonsHandler}/>
          {persons}
        </div>      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App; // this is called a higher order component
