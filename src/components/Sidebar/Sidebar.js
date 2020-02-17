import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './Sidebar.css';

const sidebar = (props) => {
    return (
        <div>
            {/* <!-- Sidebar  -->/ */}

            <nav id="sidebar">
                <div class="sidebar-header">

                </div>

                <ul class="list-unstyled components">
                    <li>
                        <NavLink to="/dashboard/home">Home/My desk</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/projects" >Projects</NavLink>
                        {/* <a href="#">Projects</a> */}
                    </li>
                    <li>
                    <NavLink to="/dashboard/time">Time Tracker/Reports</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/payments">Payments</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/nda-contant">NDA/Contact</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/support">Support</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/refer">Refer and  earn</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/settings">Account Setting</NavLink>
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
        </div>

    );
}
export default sidebar;