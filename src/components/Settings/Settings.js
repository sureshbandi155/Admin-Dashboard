import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

import classes from './Settings.module.css';

const settings = (props) => {
    return (
        <div>
            <div class="wrapper">
                {/* <!-- Sidebar  -->/ */}
                <Sidebar />
                <div id="content">
                    <p>Account Settings Component.</p>
                </div>
            </div>
        </div>

    );
}
export default settings;