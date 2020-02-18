import React, { Component } from 'react';
import classes from './Login.module.css';

import axios from 'axios';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


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
        },
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
        // console.log(this.state.loginUserDetails);
        // if (this.state.loginUserDetails.data === "Login successfully done.") {
        //     this.props.history.push('');
        // }

        axios.post('http://localhost:4000/login', data)
            .then(response => {
                alert(response.data);
                this.setState({ loginUserDetails: response.data });
                this.props.history.push('/home');
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/login');
            });


    };

    redirectSignupHandler = () => {
        this.props.history.push('/signup');
    }
    responseGoogle = (response) => {
        this.setState({ google: response.profileObj, auth: true });
        console.log(response);
        this.props.history.push('/home');
    }
    componentClicked = () => {
        console.log('btn clicked');
    }
    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            fbName: response.name,
            picture: response.picture.data.url,
            auth: true
        });
        this.props.history.push('/home');
    }

    render() {
        // console.log(this.state);
        const { errors } = this.state;
        // console.log(data);
        return (
            <div className="wrapper">
                <div className={classes.loginContainer}>
                    <h1>Log in</h1>
                    <div className={classes.login}>
                        <GoogleLogin
                            clientId="1002797710780-o39g3un6tukk7uk1v0p6omsjssu1u0u7.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                            buttonText="LOGIN WITH GOOGLE"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                        <FacebookLogin
                            appId="274007033579197"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook} />
                        <form action="" onSubmit={this.submitHandler}>
                            <div className={classes.inputGroup}>
                                <label>Email Address</label>
                                <input type="email"
                                    name="email"
                                    placeholder="name@gmail.com"
                                    value={this.state.formControls.email.value}
                                    onChange={this.changeHandler} noValidate />
                                {errors.email.length > 0 &&
                                    <span className={classes.error}>{errors.email}</span>}
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Password</label>
                                <input type="password"
                                    name="password"
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