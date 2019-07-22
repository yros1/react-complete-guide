import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
      // static getDerivedStateFromProps(props, state){
      //       console.log('[Persons.js] getDerivedStateFromProps');
      //       return state;
      // }

      // legacy - not use it
      // componentWillReceiveProps(props){
      //       console.log('[Persons.js] componentWillReceiveProps', props);
      // }

      shouldComponentUpdate(nextProps, nextState){
            console.log('[Persons.js] shouldComponentUpdate');
            return true;
      }

      // After shouldComponentUpdate() and before getSnapshotBeforeUpdate() runs render() metchod

      getSnapshotBeforeUpdate(prevProps, prevState){
            console.log('[Persons.js] getSnapshotBeforeUpdate');
            return { message: 'Snapshot!'};
      }

      // legacy - not use it
      // componentWillUpdate() {

      // }

      componentDidUpdate(prevProps, prevState, snapshot){
            console.log('[Persons.js] componentDidUpdate');
            console.log(snapshot)
      }

      render() {
            console.log('[Persons.js] rendering...');
            return this.props.persons.map( ( person, index ) => {      
              return (
                  <Person 
                        click={() => this.props.clicked( index )}
                        name={person.name}
                        age={person.age}   
                        key={person.id}             
                        changed={( event ) => this.props.changed( event, person.id )} />
                  )
            });
      }
};

// const persons = (props) => 
  
//       props.persons.map( ( person, index ) => {      
//         return <Person 
//             click={() => props.clicked( index )}
//             name={person.name}
//             age={person.age}   
//             key={person.id}             
//             changed={( event ) => props.changed( event, person.id )} />
//       });

export default Persons;