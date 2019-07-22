import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // here normal javascript code
     // let classes = ['red', 'bold'].join(' '); // join - merge together two string from array into one sting with ' ' empty space between them, result will be 'red bold'

     // Pass a fucntions to useEffect() and this execiute for every render cycle of the Cockpit component.   
     // useEffect is a React Hook and it combines componentDidMount and componentDidUpdate Life cycle hooks.
     useEffect(() => {
       console.log('[Cockpit.js useEffect]');
       // Http request...
       setTimeout(() => {
         alert('Saved data to cloud!');
       }, 1000)
     }, []); // if pass an empty array then useEffect runs just once at first time. - This technic mimic 
             // behaviour of componentDidAmount metchod. 

     // useEffect(); - I can use it multilpy times for different data setup/update.

     const assignedClasses = [];
     let btnClass = '';
     if (props.showPersons){
        btnClass = classes.Red;
     }

     if (props.persons.length <=2){
       assignedClasses.push(classes.red); // classes = ['red']
     }
     if (props.persons.length <=1){
       assignedClasses.push(classes.bold); // classes = ['red', 'bold']
     }
    return (
        // contains JSX code only 
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}> This is realy working!</p>
          <button className = {btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};


export default cockpit;