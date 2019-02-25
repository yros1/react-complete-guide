import React from 'react';

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
const person = () => {
    return <p> I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

export default person;