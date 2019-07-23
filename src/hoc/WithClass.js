import React from 'react';

// It sets up a class on a div thet wraps mine component.
const withClass = props => (
    <div className={props.classes}> { props.children } </div>
);

export default withClass;