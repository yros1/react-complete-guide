import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // here normal javascript code
     // let classes = ['red', 'bold'].join(' '); // join - merge together two string from array into one sting with ' ' empty space between them, result will be 'red bold'
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