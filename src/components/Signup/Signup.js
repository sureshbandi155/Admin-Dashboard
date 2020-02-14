import React, { Component } from 'react';
import classes from './Signup.module.css';

class SignUp extends Component {
    loginHandler = () => {
        this.props.history.push('/login');
    }
    render() {
        return(
            <div className="wrapper">
               <div className={classes.signupContainer}>
                    <h3>Sign up</h3>
                    <div className={classes.signup}>
                        <form action="" onSubmit={this.submitHandler}>
                        <div className={classes.inputGroup}>
                                <label>Name</label>
                                <input type="name" name="name"
                                    placeholder="Name"
                                    />
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Email Address</label>
                                <input type="email" name="email"
                                    placeholder="name@gmail.com"
                                    />
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Password</label>
                                <input type="password" name="password"
                                    placeholder="Password"
                                    />
                            </div>
                            <div className={classes.inputGroup}>
                                <label>Confirm Password</label>
                                <input type="password" name="confirm password"
                                    placeholder="Confirm Password"
                                    />
                            </div>
                            <div>
                                <input type="submit" value="Sign up" />
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