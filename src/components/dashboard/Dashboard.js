import React, { Component } from 'react';

import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';


const dashboard = ({ match }) => {
    return (
        <div>
            <div class="wrapper">
                <Sidebar />
                <div id="content">
                  
                </div>
            </div>
        </div>

    );
}

export default dashboard;