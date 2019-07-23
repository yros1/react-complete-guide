import React from 'react';

// It sets up a class on a div thet wraps mine component.
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClass;