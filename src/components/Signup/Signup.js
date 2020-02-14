import React, { Component } from 'react';
import classes from './Signup.module.css';

import axios from "axios";


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

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
        errors: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        loginUserDetails: '',
        errorPassword: '',
        signRes: ''
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
            case 'name':
                errors.name =
                    value.length < 5
                        ? 'Full Name must be 5 characters long!'
                        : '';
                break;
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
            case 'confirmPassword':
                errors.confirmPassword =
                    value.length < 8
                        ? 'Confirm password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });

    }
    submitHandler = (event) => {
        event.preventDefault();
        // console.log(this.state.formControls);
        const formData = {};
        for (let formElementIdentifier in this.state.formControls) {
            formData[formElementIdentifier] = this.state.formControls[formElementIdentifier].value;
        }
        if (validateForm(this.state.errors)) {
            console.info('Valid Form');
        } else {
            console.error('Invalid Form')
        }

        if (this.state.formControls.password.value !== this.state.formControls.confirmPassword.value) {
            this.setState({ errorPassword: 'Password not match' });
            console.log(this.state.errorPassword);

        }
        else {
            this.setState({ errorPassword: '' });
        }
        const data = {
            ...formData
        };
        axios.post('http://localhost:4000/signup', data)
            .then(response => {
               this.setState({signRes: response.data});
               console.log('data: ' + this.state.signRes);
            })
            .catch(err => {
                console.log(err);
            });
    };
    loginHandler = () => {
        this.props.history.push('/login');
    }
    render() {
        const { errors } = this.state;
        return (
            <div className="wrapper">
                <div className={classes.signupContainer}>
                    <h3>Sign up</h3>
                    <div className={classes.signup}>
                        <form action="" onSubmit={this.submitHandler} noValidate>
                            <div className={classes.inputGroup}>
                                <label>Full Name</label>
                                <input type="name" name="name"
                                    placeholder="Enter Full Name" noValidate
                                    value={this.state.formControls.name.value}
                                    onChange={this.changeHandler}
                                />
                                {errors.name.length > 0 &&
                                    <p className={classes.error}>{errors.name}</p>}
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Email Address</label>
                                <input type="email" name="email"
                                    placeholder="name@gmail.com" noValidate
                                    value={this.state.formControls.email.value}
                                    onChange={this.changeHandler}
                                />
                                {errors.email.length > 0 &&
                                    <p className={classes.error}>{errors.email}</p>}
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Password</label>
                                <input type="password" name="password"
                                    placeholder="Password" noValidate
                                    value={this.state.formControls.password.value}
                                    onChange={this.changeHandler}
                                />
                                {errors.password.length > 0 &&
                                    <p className={classes.error}>{errors.password}</p>}
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword"
                                    placeholder="Confirm Password" noValidate
                                    value={this.state.formControls.confirmPassword.value}
                                    onChange={this.changeHandler}
                                />
                                {errors.confirmPassword.length > 0 &&
                                    <p className={classes.error}>{errors.confirmPassword}</p>}
                                {<p className={classes.error}>{this.state.errorPassword}</p>}


                            </div>
                            <div>
                            {<p className={classes.error}>{this.state.signRes}</p>}
                                <input type="submit" value="Sign up" disabled={false}/>

                            </div>
                        </form>
                        <p>Click here to
                            <a  onClick={this.loginHandler}>Login</a>
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;