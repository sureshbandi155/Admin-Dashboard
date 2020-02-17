import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';


import classes from './Projects.module.css';

const projects = (props) => {
    return (
        <div>
        <div class="wrapper">
            {/* <!-- Sidebar  -->/ */}
            <Sidebar />
            <div id="content">
             <p>Porjects Component.</p>
            </div>
        </div>
    </div>

    );
}
export default projects;