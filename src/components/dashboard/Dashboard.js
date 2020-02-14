import React, { Component } from 'react';
import classes from './Dashboard.module.css';

const dashboard = () => {
    return (
        <div className="wrapper">
           <div className={classes.dashboard}>
           <p>Am form Dashboard Component</p>
           </div>
        </div>

    );
}

export default dashboard;