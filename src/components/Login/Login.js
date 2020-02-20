import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Login.module.css';

// import axios from 'axios';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import * as actionTypes from '../../store/actions/index';


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
        google: {
        },
        facebookLogin: {
            fbName: '',
            picture: ''
        },
        auth: false
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

    };
    submitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.formControls) {
            formData[formElementIdentifier] = this.state.formControls[formElementIdentifier].value;
        }
        // const data = {
        //     ...formData
        // };
        

        if (!this.showFormErrors()) {
            console.log('Form is invalid: do not Login');
        } else {
            this.props.onAuth(this.state.formControls.email.value, this.state.formControls.password.value);
            console.log('Form is valid: check serverside validation');
            this.props.history.push('/home');
        }
        // console.log(this.state.loginUserDetails);
        // if (this.state.loginUserDetails.data === "Login successfully done.") {
        //     this.props.history.push('');
        // }

        // axios.post('http://localhost:4000/login', data)
        //     .then(response => {
        //         alert(response.data);
        //         this.setState({ loginUserDetails: response.data });
        //         this.props.history.push('/home');
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         this.props.history.push('/login');
        //     });


    };

    redirectSignupHandler = () => {
        this.props.history.push('/signup');
    }
    responseGoogle = (response) => {
        this.setState({ google: response.profileObj, auth: true });
        console.log(this.state.google);
        this.props.history.push('/home');
    }
    responseGoogleFailure = () => {
        this.props.history.push('/login');
    }
    componentClicked = () => {
        // console.log('btn clicked');
    }
    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            fbName: response.name,
            picture: response.picture.data.url,
            auth: true
        });
        console.log(this.state.facebookLogin);
        this.props.history.push('/home');
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
                error.textContent = `${label} should be longer than 4 chars`;
            }
            return false;
        }

        error.textContent = '';
        return true;
    }

    render() {
        return (
            <div className="wrapper">
                <div className={classes.loginContainer}>
                    <h1>Log in</h1>
                    <div className={classes.login}>
                        <GoogleLogin
                            clientId="1002797710780-o39g3un6tukk7uk1v0p6omsjssu1u0u7.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                            buttonText="LOGIN WITH GOOGLE"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogleFailure}
                        />
                        <FacebookLogin
                            appId="274007033579197"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook} onFailure={this.responseGoogleFailure} />
                        <form action="" onSubmit={this.submitHandler} noValidate>
                            <div className={classes.inputGroup}>
                                <label id="emailLabel">Email Address</label>
                                <input type="email"
                                    name="email"
                                    placeholder="name@gmail.com" required
                                    value={this.state.formControls.email.value}
                                    onChange={this.changeHandler} />
                                <div className={classes.error} id="emailError" />
                            </div>
                            <div className={classes.inputGroup}>
                                <label id="passwordLabel">Password</label>
                                <input type="password"
                                    name="password"
                                    placeholder="Password" 
                                    ref={password => this.password = password}
                                    required pattern=".{5,}"
                                    value={this.state.formControls.password.value}
                                    onChange={this.changeHandler} />
                                <div className={classes.error} id="passwordError" />
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block" type="submit">Log In</button>
                            </div>
                        </form>
                        <p>Forgot password?</p>
                        <p>Don’t have an account?
                            <a onClick={this.redirectSignupHandler}>Sign up</a>
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actionTypes.auth(email, password))
    };
};
export default connect(null, mapDispatchToProps)(Login);