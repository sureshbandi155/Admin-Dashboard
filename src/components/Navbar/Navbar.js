import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons';

import classes from './Navbar.module.css';

class Navbar extends Component {
    state = {
        userName: ''
    }
    redirectHandler = () => {
        // this.props.history.push('/home');
    }


    render() {
        const userEmail = this.props.userEmail;
        axios.post('http://localhost:4000/find', { userEmail })
            .then(response => {
                this.setState({userName: response.data})
            })
            .catch(err => {
                console.log(err);
            })

        return (
            <div className={classes.Navbar}>
                <div>
                   <Link to="/home" className="btn btn-outline-primary ">Home</Link>
                  
                    {/* <button onClick={this.redirectHandler}>Home</button> */}
                </div>
                <div className={classes.Left}>
                    {/* <button>Start New Project</button> */}
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faBell} />
                    <img src="https://lh5.googleusercontent.com/-gNAmwhr8Js8/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rczoDdBarOOLuz4pWizP76TNnBXDQ/s96-c/photo.jpg" alt="person" />
                    <p>{this.state.userName}</p>
                </div>
                {/* <div>
                <Link to="/login" className="btn btn-outline-danger">LogOut</Link>
                </div> */}
            </div>
        );
    }


}
const mapStateToProps = state => {
    return {
        userEmail: state.email
    };
};

export default connect(mapStateToProps, null)(Navbar);
