import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

class Dashboard extends Component {
    // updateHandler = () => {
    //     document.getElementById("table").style.display = "none";
    //     document.getElementById("edit-form").style.display = "block";
    // }
    render() {
        return (
            <div>
                <div className="wrapper">
                    {/* <!-- Sidebar  -->/ */}
                    <Sidebar />
                    <div id="content">
                        <Navbar />
                        <h3 className="mb-4">Ongoing Projects</h3>
                        <table className="table table-hover text-center" id="table">
                            <thead>
                                <tr>
                                    <th scope="col">Project Name</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">Team size</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Edit</th>
                                    {/* <th scope="col">Delete</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Website Development</td>
                                    <td>16 Aug, 2020</td>
                                    <td>4</td>
                                    <td>WIP</td>
                                    <td><a><FontAwesomeIcon icon={faEdit} /></a></td>
                                    {/*<td><a><FontAwesomeIcon icon={faTrash}/></a></td>*/}

                                </tr>
                                <tr>
                                    <td>Homepage Design</td>
                                    <td>16 Aug, 2020</td>
                                    <td>2</td>
                                    <td>In QA</td>
                                    <td><a><FontAwesomeIcon icon={faEdit} /></a></td>
                                    {/* <td><a><FontAwesomeIcon icon={faTrash}/></a></td> */}
                                </tr>
                                <tr>
                                    <td>Social Media Marketing</td>
                                    <td>16 Aug, 2020</td>
                                    <td>2</td>
                                    <td>Ready for Review</td>
                                    <td><FontAwesomeIcon icon={faEdit} /></td>
                                    {/* <td><a><FontAwesomeIcon icon={faTrash}/></a></td> <a onClick={this.updateHandler}</a>*/}
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    {/* <div>
                <form id="content">
                    <input type="text" placeholder="hide"/>
                </form>
            </div> */}
                </div>

            </div>

        );
    }
}

export default Dashboard;