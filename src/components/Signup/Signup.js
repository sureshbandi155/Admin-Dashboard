import React, { Component } from 'react';
import classes from './Signup.module.css';

import axios from "axios";

class SignUp extends Component {
    state = {
        formControls: {
            name: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            },
            confirmPassword: {
                value: ''
            }
        },
        loginUserDetails: '',
        errorPassword: '',
        signRes: ''
    };
    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        event.target.classList.add('active');
        this.showInputError(event.target);
        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
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
        if (!this.showFormErrors()) {
            console.log('Form is invalid: do not submit');
        } else {
            this.props.history.push('/login');
            alert('Registration successful');
            axios.post('http://localhost:4000/signup', data)
                .then(response => {
                    this.setState({ signRes: response.data });
                    console.log('data: ' + this.state.signRes);
                })
                .catch(err => {
                    console.log(err);
                });
            console.log('Form is valid: submit');
        }




    };
    loginHandler = () => {
        this.props.history.push('/login');
    }

    showFormErrors() {
        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.add('active');

            const isInputValid = this.showInputError(input);

            if (!isInputValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }
    showInputError(input) {
        const name = input.name;
        const validity = input.validity;
        const label = document.getElementById(`${name}Label`).textContent;
        const error = document.getElementById(`${name}Error`);

        const isPassword = name.indexOf('password') !== -1;
        const isPasswordConfirm = name === 'confirmPassword';
        if (isPasswordConfirm) {
            if (this.password.value !== this.confirmPassword.value) {
                this.confirmPassword.setCustomValidity('Passwords do not match');
            } else {
                this.confirmPassword.setCustomValidity('');
            }
        }

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (validity.typeMismatch) {
                error.textContent = `${label} should be a valid email address`;
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer than 4 characters`;
            } else if (isPasswordConfirm && validity.customError) {
                error.textContent = 'Passwords do not match';
            }
            return false;
        }

        error.textContent = '';
        return true;
    }

    render() {
        return (
            <div className="wrapper">
                <div className={classes.signupContainer}>
                    <h1>Sign up</h1>
                    <div className={classes.signup}>
                        <form action="" onSubmit={this.submitHandler} noValidate>
                            <div className={classes.inputGroup}>
                                <label id="nameLabel">Full Name</label><span>*</span>
                                <input type="name" name="name"
                                    placeholder="Enter Full Name"
                                    value={this.state.formControls.name.value}
                                    onChange={this.changeHandler} required
                                />
                                <div className={classes.error} id="nameError" />
                            </div>
                            <div className={classes.inputGroup}>
                                <label id="emailLabel">Email Address</label><span>*</span>
                                <input type="email" name="email"
                                    placeholder="name@gmail.com" noValidate
                                    value={this.state.formControls.email.value}
                                    onChange={this.changeHandler} required
                                />
                                <div className={classes.error} id="emailError" />
                            </div>
                            <div className={classes.inputGroup}>
                                <label id="passwordLabel">Password</label><span>*</span>
                                <input type="password" name="password"
                                    placeholder="Password"
                                    ref={password => this.password = password}
                                    value={this.state.formControls.password.value}
                                    onChange={this.changeHandler} required pattern=".{5,}"
                                />
                                <div className={classes.error} id="passwordError" />
                            </div>
                            <div className={classes.inputGroup}>
                                <label id="confirmPasswordLabel">Confirm Password</label><span>*</span>
                                <input type="password" name="confirmPassword"
                                    placeholder="Confirm Password"
                                    ref={confirmPassword => this.confirmPassword = confirmPassword}
                                    value={this.state.formControls.confirmPassword.value}
                                    onChange={this.changeHandler} required
                                />
                                <div className={classes.error} id="confirmPasswordError" />
                            </div>
                            <div>
                                <button className="btn btn-block btn-primary" type="submit" value="Sign up"> SignUp</button>

                            </div>
                        </form>
                        <p>Click here to
                            <a onClick={this.loginHandler}>Login</a>
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;