import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxilliary';
import withClasss from '../../../hoc/withClass';
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
class Person extends Component {
    render() {
        // It returns JSX code.
        console.log('[Person.js] rendering...');    
        return (
            <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }    
}

// In here you define which props this component usese and which types for those props.
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClasss(Person, classes.Person);