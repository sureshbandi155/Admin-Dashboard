import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons';

import classes from './Navbar.module.css';

class Navbar extends Component {
    redirectHandler = () => {
        // this.props.history.push('/home');
    }
    render() {

        return (
            <div className={classes.Navbar}>
                <div>
                    <button onClick={this.redirectHandler}>Home</button>
                </div>
                <div className={classes.Left}>
                    {/* <button>Start New Project</button> */}
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faBell} />
                    <img src="https://lh5.googleusercontent.com/-gNAmwhr8Js8/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rczoDdBarOOLuz4pWizP76TNnBXDQ/s96-c/photo.jpg" alt="person" />
                    <p>userDetalils: {this.props.userLD}</p>
                </div>

            </div>
        );
    }


}
const mapStateToProps = state => {
    return {
        userLD: state.email
    };
};

export default connect(mapStateToProps, null)(Navbar);
