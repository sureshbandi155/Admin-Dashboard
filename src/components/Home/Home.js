import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

import classes from './Home.module.css';

const dashboard = (props) => {
    return (
        <div>
            <div class="wrapper">
                {/* <!-- Sidebar  -->/ */}
                <Sidebar />
                <div id="content">
                    <h3 className="mb-4">Ongoing Projects</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Project Name</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Team size</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Website Development</td>
                                <td>16 Aug, 2020</td>
                                <td>4</td>
                                <td>WIP</td>
                            </tr>
                            <tr>
                                <td>Homepage Design</td>
                                <td>16 Aug, 2020</td>
                                <td>2</td>
                                <td>In QA</td>
                            </tr>
                            <tr>
                                <td>Social Media Marketing</td>
                                <td>16 Aug, 2020</td>
                                <td>2</td>
                                <td>Ready for Review</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}
export default dashboard;