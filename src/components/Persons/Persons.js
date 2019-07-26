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
            if (
                  nextProps.persons !== this.props.persons ||
                  nextProps.changed !== this.props.changed ||
                  nextProps.clicked !== this.props.clicked

                  ) {
                  console.log('[Persons.js] shouldComponentUpdate -> YES');
                  return true;
            } else {
                  console.log('[Persons.js] shouldComponentUpdate -> NO');
                  return false;
            }
            // return true;
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

      // Clean up class-based Component. etc from event listeners itp.
      // This is a place where we write any code that needs to run right before when Compoment is removed.
      componentWillUnmount(){
            console.log('[Persons.js] componentWillUnmount');
      }

      render() {
            console.log('[Persons.js] rendering...');            
            return ( this.props.persons.map( ( person, index ) => {      
                  return (                  
                              <Person 
                                    click={() => this.props.clicked( index )}
                                    name={person.name}
                                    age={person.age}   
                                    key={person.id}             
                                    changed={( event ) => this.props.changed( event, person.id )} 
                              />
                        );
                  })
                  
            );           
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