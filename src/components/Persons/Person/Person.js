import React from 'react';
import classes from './Person.css';
// in general, a component is a fnction which returns some JSX - the custom html element.
// 1) Simple fnction approach
// function person(){
//     return <h2> some jsx
// }

// 2) ES5 syntax of variable which holds a function
// var person = function(){
//     return <h2> some jsx
// }

// 3) ES6 syntax
const person = (props) => {

    let inputClass = classes.InputDefault;

    const rnd = Math.random();
    if (rnd > 0.7) {
        // that mimic error
        // throw new Error('Something went wrong');
    }

    return (
        <div className={classes.Person} >
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input className={inputClass} type="text" onChange={props.changed} value={props.name}/>
        </div>        
    )
};

export default person;