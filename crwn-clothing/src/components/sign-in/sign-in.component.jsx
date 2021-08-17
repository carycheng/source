import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButtom from '../custom-button/custom-button.component.jsx';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render () {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} label="email" required/>
                    <FormInput name="password" type="password" value={this.state.password} onChange={this.handleChange} label="password" required/>
                    <CustomButtom type="submit">Sign In</CustomButtom>
                    <CustomButtom onClick={signInWithGoogle}>Sign In with Google</CustomButtom>
                </form>
            </div>
        );
    }
}

export default SignIn;