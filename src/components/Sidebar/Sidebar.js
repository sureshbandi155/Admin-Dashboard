import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

const sidebar = (props) => {
    return (
        <div>
            {/* <!-- Sidebar  -->/ */}

            <nav id="sidebar">
                <div className="sidebar-header">

                </div>

                <ul className="list-unstyled components">
                    <li>
                        <NavLink to="/home">Home/My desk</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" >Projects</NavLink>
                        {/* <a href="#">Projects</a> */}
                    </li>
                    <li>
                        <NavLink to="/time">Time Tracker/Reports</NavLink>
                    </li>
                    <li>
                        <NavLink to="/payments">Payments</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nda-contract">NDA/Contract</NavLink>
                    </li>
                    <li>
                        <NavLink to="/support">Support</NavLink>
                    </li>
                    <li>
                        <NavLink to="/refer">Refer and  earn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">Account Setting</NavLink>
                    </li>
                    {/* <li>
                        <a href="#">Messages</a>
                    </li>
                    <li>
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
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
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
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
                    </li> */}
                </ul>
            </nav>

        </div>

    );
}
export default sidebar;