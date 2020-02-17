import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './Dashboard.css';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';


const dashboard = ({ match }) => {
    return (
        <div>
            <div class="wrapper">
                {/* <!-- Sidebar  -->/ */}
                <nav id="sidebar">
                    <div class="sidebar-header">

                    </div>

                    <ul class="list-unstyled components">
                        <li class="active">
                            <a href="#">Home/My desk</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Time Tracker/Reports</a>
                        </li>
                        <li>
                            <a href="#">Payments</a>
                        </li>
                        <li>
                            <a href="#">NDA/Contact</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Refer and  earn</a>
                        </li>
                        <li>
                            <a href="#">Account Setting</a>
                        </li>
                        <li>
                            <a href="#">Messages</a>
                        </li>
                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div id="content">
                    <p>Home Component</p>
                </div>
            </div>
        </div>

    );
}

export default dashboard;