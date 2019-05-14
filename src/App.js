import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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

  // here we use personId instead personIndex
  deletePersonV2Handler = (personId) =>
  {
    const persons = [...this.state.persons];
    persons.splice(personId, 1);
    this.setState({persons: persons});
  }

  // list of suporrted events here https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8124210?start=0    
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
       persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // return we returning JSX code here, which is our functional component Person
            return <Person 
              click={() => this.deletePersonHandler(index)}
              // click={() => this.deletePersonV2Handler(person.id)} // this version uses person id
              // click={this.deletePersonHandler(bind(this, index))} // this is an alternative where use bind()
              name={person.name}
              age={person.age}
              key={person.id} 
              personsLenght = {this.state.persons.length}
              changed={(event) => this.nameChangedHandler(event, person.id)} />        
          })}
        </div>
       );

       btnClass = classes.Red
    }    

    // let classes = ['red', 'bold'].join(' '); // join - merge together two string from array into one sting with ' ' empty space between them, result will be 'red bold'
    const assignedClasses = [];
    if (this.state.persons.length <=2){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <=1){
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (      
        // This is not HTML! This is JSX
        <div className={classes.App}>
          <h1>Hi, I'm a React App.</h1>
          <p className={assignedClasses.join(' ')}> This is realy working!</p>

          <button     
            className = {btnClass}       
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* persons variable which contains JSX code */}
          {persons}
        </div>      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App; // this is called a higher order component
