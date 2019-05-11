import React from 'react';
import Radium from 'radium'
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
    
    const style = {
        color: 'black',
        fontWeight: 'normal',
        fontSize: '15px'
    }

    const updateStyle = (color, fontWeight, fontSize) => {
        style.color = color;
        style.fontWeight = fontWeight;
        style.fontSize = fontSize;
    }

    let classes = ['Person'];

    style[':hover'] = {    
        backgroundColor: 'lightBlue',
        color: 'white'
    }

    if  (props.personsLenght <= 2){        
        classes.push('orangeBackgroundColor');
        updateStyle('blue', 'bold', '25px');
    }
    if  (props.personsLenght <= 1){        
        classes.push('pinkBackgroundColor'); // overrite orange one
        updateStyle('brown', '900', '35px');
    }

    return (
        <div className={classes.join(' ')}>
            <p style={style} onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>        
    )
};

export default Radium(person);