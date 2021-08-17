import React from 'react';

export default CustomButton = ({ children, ...otherProps }) => {
    <button className="custom-button" {...otherProps}>
        { children }
    </button>
}

