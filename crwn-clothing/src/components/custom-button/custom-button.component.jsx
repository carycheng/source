import React from 'react';

export default CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        { children }
    </button>
}

