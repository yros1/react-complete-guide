import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilliary';
import AuthContext from '../context/auth-context';

// Throug App component nest here all other components the app might need
class App extends Component {
constructor(props) {
  super(props);
  console.log('[App.js] constructor');
  // You can initialize state here.
}

  state = {
    persons: [
      { id: 'sdafdf', name: 'Max', age: 28 },
      { id: 'dfsefa', name: 'Manu', age: 29 },
      { id: 'teswef', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  } 

  static getDerivedStateFromProps(props, state) {
    // you should retrun updated state here
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }  

  // Here we do fetching new data from a server
  componentDidMount(){
    // Yo could do http requests here
    console.log('[App.js] componentDidMount');
  }

  // this can be used for performence iprovements/optimalizations
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // Here we do fetching new data from a server
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

    // This is better and recomended way of updating the State WHEN you depending on old state.
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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

  loginHandler = () => {    
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
       persons = <Persons 
                  persons = {this.state.persons} 
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangedHandler} 
                  isAuthenticated = {this.state.authenticated}
                  />;
    }    

    return (      
        // This is not HTML! This is JSX
        <Aux>
          <button onClick={() => {
            this.setState({ showCockpit: false })
            }}
            >
              Remove Cockpit
          </button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler 
            }}
          >
            { this.state.showCockpit ? (            
              <Cockpit 
              title = {this.props.appTitle}
              showPersons = {this.state.showPersons}
              personsLength = {this.state.persons.length} 
              clicked = {this.togglePersonsHandler}
              />
            ) : null }            
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
