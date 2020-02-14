import React, { Component } from 'react';
import classes from './Login.module.css';

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
        loginUserDetails: ''
    };
    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
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
        // const data = {
        //     ...formData
        // };
    };
    redirectSignupHandler = () => {
        this.props.history.push('/signup');
    }
    render() {
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
                                    onChange={this.changeHandler} />
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Password</label>
                                <input type="password" name="password"
                                    placeholder="Password"
                                    value={this.state.formControls.password.value}
                                    onChange={this.changeHandler} />
                            </div>
                            <div>
                                <input type="submit" value="Log In" />
                            </div>
                        </form>
                        <p>Forgot password?</p>
                        <p>Don’t have an account? 
                            <a onClick={this.redirectSignupHandler}>Sign up</a>
                        </p>
                       {/* <p onClick={this.redirectSignupHandler}>Sign up</p> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;