import React, { Component } from 'react';
import classes from './Login.module.css';

import axios from 'axios';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Login extends Component {
    state = {
        formControls: {
            email: {
                value: ''
            },
            password: {
                value: ''
            }
        },
        loginUserDetails: '',
        errors: {
            email: '',
            password: ''
        }
    };
    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let errors = this.state.errors;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });

    }
    submitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.formControls) {
            formData[formElementIdentifier] = this.state.formControls[formElementIdentifier].value;
        }
        const data = {
            ...formData
        };
        if (validateForm(this.state.errors)) {
            console.info('Valid Form');
        } else {
            console.error('Invalid Form')
        }

        axios.post('http://localhost:4000/login', data)
        .then(response => {
            console.log(response.data);
            this.setState({loginUserDetails: response.data});
            // this.props.history.push('/dashboard');
        })
        .catch(err => {
            console.log(err);
            //this.props.history.push('/login');
        } );

    };
    redirectSignupHandler = () => {
        this.props.history.push('/signup');
    }
    render() {
        const { errors } = this.state;

        // console.log(data);
        return (
            <div className="wrapper">
                <div className={classes.loginContainer}>
                    <h3>Log in</h3>
                    <div className={classes.login}>
                        <form action="" onSubmit={this.submitHandler}>
                            <div className={classes.inputGroup}>
                                <label>Email Address</label>
                                <input type="email" name="email"
                                    placeholder="name@gmail.com"
                                    value={this.state.formControls.email.value}
                                    onChange={this.changeHandler} noValidate />
                                    {errors.email.length > 0 &&
                                    <span className={classes.error}>{errors.email}</span>}
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Password</label>
                                <input type="password" name="password"
                                    placeholder="Password"
                                    value={this.state.formControls.password.value}
                                    onChange={this.changeHandler} noValidate />
                                    {errors.password.length > 0 &&
                                    <span className={classes.error}>{errors.password}</span>}
                            </div>
                            <div>
                            {/* {<span className={classes.error}>{this.state.loginUserDetails}</span>} */}
                                <input type="submit" value="Log In" />
                            </div>
                        </form>
                        <p>Forgot password?</p>
                        <p>Don’t have an account? 
                            <a href="#" onClick={this.redirectSignupHandler}>Sign up</a>
                        </p>
                       {/* <p onClick={this.redirectSignupHandler}>Sign up</p> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;