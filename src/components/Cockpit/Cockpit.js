import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext); // React make a connection behind a scence

  console.log(authContext.authenticated);

    // here normal javascript code
     // let classes = ['red', 'bold'].join(' '); // join - merge together two string from array into one sting with ' ' empty space between them, result will be 'red bold'

     // Pass a fucntions to useEffect() and this execiute for every render cycle of the Cockpit component.   
     // useEffect is a React Hook and it combines componentDidMount and componentDidUpdate Life cycle hooks.
     useEffect(() => {
       console.log('[Cockpit.js useEffect]');
       // Http request...
      //  setTimeout(() => {
      //    alert('Saved data to cloud!');
      //  }, 1000);
      toggleBtnRef.current.click();
       // Anonymous function in return runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle.
       return () => {
         console.log('[Cockpit.js cleanup work in useEffect]');
       };
     }, []); // if pass an empty array then useEffect runs just once at first time. - This technic mimic 
             // behaviour of componentDidAmount metchod. 
             // Also an empty array causes that Cleanup function runs when compoents gets destroyed

     useEffect(() => {
      console.log('[Cockpit.js 2nd useEffect]');
      return () => {
        console.log('[Cockpit.js cleanup work in 2nd useEffect]');
      };
     }); // Lack of second argument (like an empty array, or array with some values) causes that that
         // Cleanup function runs at every update cycle.

     const assignedClasses = [];
     let btnClass = '';
     if (props.showPersons){
        btnClass = classes.Red;
     }

     if (props.personsLength <=2){
       assignedClasses.push(classes.red); // classes = ['red']
     }
     if (props.personsLength <=1){
       assignedClasses.push(classes.bold); // classes = ['red', 'bold']
     }
    return (
        // contains JSX code only 
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}> This is realy working!</p>
          <button ref={toggleBtnRef} className = {btnClass}
            onClick={props.clicked}>Toggle Persons</button>
          <button onClick={authContext.login}>Log in</button>
        </div>
    );
};


export default React.memo(cockpit); // React.memo() - stores a spanshot of cockpit component to workout any changes happend