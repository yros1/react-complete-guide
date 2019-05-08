import React from 'react';
import './Person.css';
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
    const personsLenght = props.personsLenght;

    let classes = ['Person'];
    if  (personsLenght <= 2){        
        classes = ['PersonV2'];
    }
    if  (personsLenght <= 1){        
        classes = ['PersonV3'];
    }

    return (
        <div className={classes}>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;